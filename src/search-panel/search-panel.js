import React, { Component } from 'react';
import './search-panel.css';
import { Form, Col, Button } from "react-bootstrap"
export default class SearchPanel extends Component {
    constructor() {
        super();
        this.state = {
            term: '',
            filterCountries: ''
        };
    }
    searchChange = e => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
        // console.log(this.state)

    }
    changeFilter = e => {
        const filterCountries = e.target.value;
        this.setState({ filterCountries });

        this.props.onFilterChange(filterCountries);
        // console.log(this.state)
    };

    render() {
        return (
            <React.Fragment>
                <input placeholder="search" className='form-control search-input'
                    onChange={this.searchChange} />
                <Form.Group className="formgroup" as={Col} controlId="formRegion">
                    <Form.Label>Filter by Region</Form.Label>
                    <Form.Control
                        as="select"
                        //   value={this.state.filter}
                        onChange={this.changeFilter}
                        title='subregion'>
                        <option>All</option>
                        <option>Western Europe</option>
                        <option>Eastern Europe</option>
                        <option>Northern Europe</option>
                        <option>Southern Europe</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary">
                    Sort Name
                   </Button>
                <Button variant="primary">
                    Sort Population                     </Button>
                <Button variant="primary">Sort Region
                         </Button>
            </React.Fragment>
        )
    }
}



