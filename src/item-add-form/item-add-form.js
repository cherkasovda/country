import React, { Component } from 'react';
import './item-add-form.css';
import { Form, Button, Col } from "react-bootstrap"


export default class ItemAddForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            capital: '',
            population: '',
            subregion: '',
            currencies: ''
        };
    }
    numericCode = 1001;
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state);

        this.setState({
            name: '',
            capital: '',
            population: '',
            subregion: '',
            currencies: '',
            numericCode: this.numericCode++
        });
    };

    onItemChangeCap = (e, propName) => {
        this.setState({ [propName]: e.target.value });
    };
    // onItemChangeName = e => {
    //     this.setState({ name: e.target.value });
    // };

    // onItemChangeCap = e => {
    //     this.setState({ capital: e.target.value });
    // };

    // onItemChangePop = e => {
    //     this.setState({ population: e.target.value });
    // };

    // onItemChangeReg = e => {
    //     this.setState({ subregion: e.target.value });
    // };
    // onItemChangeCur = e => {
    //     this.setState({ currencies: e.target.value });
    // };

    // onItemChangeName = e => {
    //     this.setState({
    //         name: e.target.value,
    //         capital: e.target.value,
    //         population: e.target.value,
    //         subregion: e.target.value,
    //         currencies: e.target.value
    //     });
    // };

   
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formName" >
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter name country" onChange={this.onItemChange}
                            value={this.state.name}
                        propName='name'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCapital">
                        <Form.Label>Capital</Form.Label>
                        <Form.Control type="text" placeholder="Enter capital of country" onChange={this.onItemChange}
                            value={this.state.capital} 
                            propName='capital'/>
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formPopul">
                    <Form.Label>Population</Form.Label>
                    <Form.Control type="number" placeholder="Enter population" onChange={this.onItemChange}
                        value={this.state.population}
                        propName='population' />
                </Form.Group>
                <Form.Group as={Col} controlId="formCurr">
                    <Form.Label>Currencies</Form.Label>
                    <Form.Control type="text" placeholder="Enter currencies" onChange={this.onItemChange}
                        value={this.state.currencies}
                        propName='currencies' />
                </Form.Group>

                <Form.Group as={Col} controlId="formRegion">
                    <Form.Label>Region</Form.Label>
                    <Form.Control as="select" onChange={this.onItemChange}
                        value={this.state.subregion}
                    propName='region'>
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