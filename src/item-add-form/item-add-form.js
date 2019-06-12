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
            currencies: ''
            // flag: ''
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
            //  flag: <img src = {icon}/>,
            // currencies: '',
            numericCode: this.numericCode++
           
        });
    };

    // onItemChange = (e, propName) => {
    //     this.setState({ [propName]: e.target.value });
    // };
    onItemChangeName = e => {
        this.setState({ name: e.target.value });
    };

    onItemChangeCap = e => {
        this.setState({ capital: e.target.value });
    };

    onItemChangePop = e => {
        this.setState({ population: e.target.value });
    };

    onItemChangeReg = e => {
        this.setState({ subregion: e.target.value });
    };
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
                        <Form.Control
                            type="text"
                            placeholder="Enter name country"
                            // onChange={this.onItemChange}
                            onChange={this.onItemChangeName}

                            value={this.state.name}
                            propName="name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCapital">
                        <Form.Label>Capital</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter capital of country"
                            // onChange={this.onItemChange}
                            onChange={this.onItemChangeCap}

                            value={this.state.capital}
                            propName='capital' />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formPopul">
                    <Form.Label>Population</Form.Label>
                    <Form.Control type="number"
                        placeholder="Enter population"
                        // onChange={this.onItemChange}
                        onChange={this.onItemChangePop}

                        value={this.state.population}
                        propName='population' />
                </Form.Group>
                {/* <Form.Group as={Col} controlId="formCurr">
                    <Form.Label>Currencies</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter currencies"
                        // onChange={this.onItemChange}
                        onChange={this.onItemChangeCur}

                        value={this.state.currencies}
                        propName='currencies' />
                </Form.Group> */}

                <Form.Group as={Col} controlId="formRegion">
                    <Form.Label>Region</Form.Label>
                    <Form.Control
                        as="select"
                        // onChange={this.onItemChange}
                        onChange={this.onItemChangeReg}

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