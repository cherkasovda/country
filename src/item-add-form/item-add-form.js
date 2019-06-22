import React, { Component } from 'react';
import './item-add-form.css';
import { Form, Button, Col } from "react-bootstrap"
// import icon from './death-star.png'


export default class ItemAddForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            capital: '',
            population: '',
            subregion: '',
            currencies: [{}]
              // flag: ''
        };
    }
    id = 1001;
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state);
        this.setState({
            name: '',
            capital: '',
            population: '',
            subregion: '',
            //  flag: <img src = {icon}/>,
            currencies: [{}],
            id: this.id++
        });

        console.log(this.state.currencies)
    };
    onItemChange = e => {
        if (e.target.title === 'currencies')
            this.setState({
                currencies: [
                    { name: e.target.value }
                ]
            });
        else
            this.setState({ [e.target.title]: e.target.value });
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formName" >
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name country"
                            onChange={this.onItemChange}
                            value={this.state.name}
                            title="name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCapital">
                        <Form.Label>Capital</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter capital of country"
                            onChange={this.onItemChange}
                            value={this.state.capital}
                            title='capital' />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formPopul">
                    <Form.Label>Population</Form.Label>
                    <Form.Control type="number"
                        placeholder="Enter population"
                        onChange={this.onItemChange}
                        value={this.state.population}
                        title='population' />
                </Form.Group>
                <Form.Group as={Col} controlId="formCurr">
                    <Form.Label>Currencies</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter currencies"
                        onChange={this.onItemChange}
                        // value={this.state.currencies[0].name}
                        title='currencies' />
                </Form.Group>

                <Form.Group as={Col} controlId="formRegion">
                    <Form.Label>Region</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={this.onItemChange}
                        value={this.state.subregion}
                        title='subregion'>
                        <option>Choose...</option>
                        <option>...Europe</option>
                        <option>West Europe</option>
                        <option>East Europe</option>
                        <option>Nord Europe</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Add country
              </Button>
            </Form>

        )
    }
}