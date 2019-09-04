import React from 'react';
import './App.css';
import { countryData } from "../countryData";
import ItemCountry from '../listcountry/listcountry';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FavCountry from '../favor-country/fav-country';
import Header from "../header/header"

// import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: countryData,
      term: '',
      filterCountries: ''
    }
  };
  onItemChangeCountry = e => {
    const newCountriesList = this.state.countries.map(country => {
      if (e.target.value === country.name) {
        country.inFav = true
      }
      return country
    })
    this.setState({ countries: newCountriesList });
  };


  componentDidMount() {
    const newC = this.state.countries;
    newC.forEach(function (el, i) {
      newC[i].id = i;
    });
    this.setState({ countries: newC })
  }
  addItem = (newCountry) => {
    this.setState(({ countries }) => {
      return {
        countries: [
          ...countries,
          newCountry
        ]
      }
    });
  };


  deleteFavCountry = id => {
    const updateCountries = this.state.countries.map(country => {
      if (id === country.id) {
        country.inFav = false;
      }
      return country
    });
    this.setState({
      countries: updateCountries
    });
  };
  deleteCountry = (id) => {
    const updateCountries = this.state.countries.filter(item => item.id !== id);
    this.setState({
      countries: updateCountries
    });
  };

  onFilterChange = filterCountries => {
    const visibleCountries = this.state.countries.map(country => {
      if (filterCountries === country.subregion || filterCountries === 'All') {
        country.isVisible = 1
      } else {
        country.isVisible = 0
      }
      return country
    })
    this.setState({ countries: visibleCountries });
  };

  sortByField= () => {
    const sortCountries = this.state.countries.sort(function (a, b) { return a.region < b.region ? -1 : 1 });
    this.setState({
      countries: sortCountries
    });
  };
  clickSortName = () =>{
    console.log(1111)

  }
  search(items, term) {
    if (!term.length) return items;
    return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);// РёС‰РµС‚ РїРѕРґСЃС‚СЂРѕРєСѓ РІ СЃС‚СЂРѕРєРµ
  }
  searchChange = term => {
    this.setState({ term })
  };
  render() {
    const countriesState = this.state.countries;
    const visibleItems = this.search(this.state.countries, this.state.term)
    return (
      <Router>
        <React.Fragment>
          <Header onItemAdded={this.addItem}
            onSearchChange={this.searchChange}
            onFilterChange={this.onFilterChange}
            onSortByField={this.sortByField}
            onClickSortName={this.clickSortName}

          />
          <Switch >
            <Route exact path="/" render={() => (<Redirect to="/listcountry" />)} />
            <Route path="/listcountry" render={() => <ItemCountry listCountry={visibleItems}
              onDeleted={this.deleteCountry} />} />
            <Route path="/favcountry" render={() => <FavCountry countriesState={countriesState}
              listCountry={visibleItems}
              deleteFavCountry={this.deleteFavCountry}
              onItemChangeCountry={this.onItemChangeCountry}
            />} />


          </Switch>
        </React.Fragment>
      </Router>

    )
  }
}
export default App;

