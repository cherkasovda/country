import React, { Component } from "react";
import { Col, Row, Card, Accordion, Button } from "react-bootstrap"
import '../listcountry/listcountry.css'


class CardComponent extends Component {
    render() {
        const { country } = this.props;
        return (
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Button} eventKey="1">
                        <p className="card-title mr-5 float-left " key={country.numericCode}>{country.name}</p>
                        {console.log(country.numericCode)}
                         <img className="float-right" src={country.flag} alt="" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Row>
                                <Col>Capital: </Col>
                                <Col> {country.capital}</Col>
                            </Row>
                            <Row>
                                <Col>Population: </Col>
                                <Col>{country.population} peoples</Col>
                            </Row>
                            <Row>
                                <Col>Region:  </Col>
                                <Col> {country.subregion}</Col>
                            </Row>
                            <Row>
                                <Col>Currencies:  </Col>
                                <Col> {country.currencies[0].name}</Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion >
        );
    }
}
export default CardComponent;

