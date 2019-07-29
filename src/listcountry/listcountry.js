import React from "react";
import './listcountry.css'
import CardComponent from "../country-details/country-details"
import { Accordion } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context"



class ItemCountry extends React.Component {

  render() {
    const { listCountry, onDeleted } = this.props;
    return (
      <Accordion className="contant" >
        {listCountry.map((country, i) => {
          if (country.isVisible === undefined || country.isVisible === 1) {
            return (
              <CardComponent
                country={country} eventKey={i} key={i}
                onDeleted={onDeleted} />
            );
          }
        })}

      </Accordion>
    );
  }
}

export default withRouter(ItemCountry);