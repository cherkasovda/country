import React from 'react';
import './App.css';
import { countryData } from "../countryData";
import SearchPanel from "../search-panel/search-panel"
import CardComponent from "../country-details/country-details"
// import ItemAddForm from "../item-add-form/item-add-form"
import Popup from '../popup/popup';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: countryData,
      term: ''
    }
  }

  addItem = (newCountry) => {
    // 1 - сгенерировать уникальный id
    // 2 - добавить элемент в массив
    this.setState(({ countries }) => {
      return {
        countries: [
          ...countries,
          newCountry
        ]
      }
    });
  };

  search(items, term) {
    if (!term.length) return items;
    return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1);// РёС‰РµС‚ РїРѕРґСЃС‚СЂРѕРєСѓ РІ СЃС‚СЂРѕРєРµ
  }

  searchChange = term => {
    this.setState({ term })
  };



  render() {
    console.log(this.state)
    const visibleItems = this.search(this.state.countries, this.state.term)
    return (
      <React.Fragment>
        <h2 className="mt-3 mx-auto">Countries Europe</h2>
        <div className="container d-flex">
          <SearchPanel onSearchChange={this.searchChange} />
          <Popup onItemAdded={this.addItem} />
        </div>
        <div>
          {visibleItems.map(country => {
            return (
              <CardComponent
                country={country} />
            );
          })}

        </div>
      </React.Fragment>
    )
  }
}

export default App;
