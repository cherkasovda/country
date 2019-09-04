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
  // onSortChange = () => {
  //   const updateCountries = this.state.countries.sort(
  //     function compareValues(key, order = 'asc') {
  //       return function (a, b) {
  //         if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
  //           return 0;
  //         }
  //         const varA = (typeof a[key] === 'string') ?
  //           a[key].toUpperCase() : a[key];
  //         const varB = (typeof b[key] === 'string') ?
  //           b[key].toUpperCase() : b[key];
  //         let comparison = 0;
  //         if (varA > varB) {
  //           comparison = 1;
  //         } else if (varA < varB) {
  //           comparison = -1;
  //         }
  //         return (
  //           (order === 'desc') ? (comparison * -1) : comparison
  //         );
  //       };
  //     })
  //   this.setState({ countries: updateCountries });
  // }

  onSortPopulation = () => {
    const updateCountries = this.state.countries.sort(function compare(a, b) {
      let comparison = 0;
      if (a.population > b.population) {
        comparison = 1;
      } else if (a.population < b.population) {
        comparison = -1;
      }
      return comparison;
    })
    this.setState({ countries: updateCountries });
  }
  onSortName = () => {
    const updateCountries = this.state.countries.sort(function compare(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    })
    this.setState({ countries: updateCountries });
  }
  onSortRegion = () => {
    const updateCountries = this.state.countries.sort(function compare(a, b) {
      const regionA = a.subregion.toUpperCase();
      const regionB = b.subregion.toUpperCase();
      let comparison = 0;
      if (regionA > regionB) {
        comparison = 1;
      } else if (regionA < regionB) {
        comparison = -1;
      }
      return comparison;
    })
    this.setState({ countries: updateCountries });
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
            onSortPopulation={this.onSortPopulation}
            onSortName={this.onSortName}
            onSortRegion={this.onSortRegion}
            onSortChange={this.onSortChange}

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
