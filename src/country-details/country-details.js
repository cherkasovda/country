import React, { Component } from "react";
import { Col, Row, Card, Accordion, Button } from "react-bootstrap";
import '../listcountry/listcountry.css';
import  DeleteImg from   './delete.svg'


class CardComponent extends Component {
    render() {
        const { country, eventKey, onDeleted } = this.props;
        return (
            <Card >
                <Accordion.Toggle  className='accordcont' as={Button} eventKey={eventKey}>
                    <p className="card-title mr-5" >{country.name}</p>
                    <img className="float-right" src={country.flag} alt="" />
                    {/* <Button className='delete' variant="secondary" size="sm" onClick={() => onDeleted(country.id)}> */}
                        <img src={DeleteImg} alt='delete' onClick={() => onDeleted(country.id)}/>
            {/* </Button> */}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKey}>
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
        );
    }
}
export default CardComponent;

