import React from "react";
import CardComponent from "../country-details/country-details"
import { Accordion, Form, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// import { SwapiServiceConsumer } from "../swapi-service-context/swapi-service-context"



class FavCountry extends React.Component {

    render() {

        const { deleteFavCountry, onItemChangeCountry, listCountry, countriesState } = this.props;
        return (
            <React.Fragment >
                <Form.Group className="contant" as={Col} controlId="formCount">
                    <Form.Control
                        onChange={onItemChangeCountry}
                        as="select"
                        title='nameCount'>
                        <option>Choose the country...</option>
                        {countriesState.map((country, i) => {
                            return (
                                <option key={i}>
                                    {country.name}
                                </option>
                            );
                        })}
                    </Form.Control>
                </Form.Group>
                <Accordion className="accord">
                    {listCountry.map((country, i) => country.inFav ? <CardComponent
                        country={country} eventKey={i} key={i}
                        onDeleted={deleteFavCountry} /> : null
                    )}
                </Accordion>
            </React.Fragment>
        );
    }
}

export default withRouter(FavCountry);
