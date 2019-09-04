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

    }
    changeFilter = e => {
        const filterCountries = e.target.value;
        this.setState({ filterCountries });
        this.props.onFilterChange(filterCountries);
    };

    render() {
        const { onSortName, onSortRegion, onSortPopulation, onSortChange } = this.props;

        return (
            <React.Fragment>
                <input placeholder="search" className='form-control search-input'
                    onChange={this.searchChange} />
                <Form.Group className="formgroup" as={Col} controlId="formRegion">
                    <Form.Label>Filter by Region</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={this.changeFilter}
                        title='subregion'>
                        <option>All</option>
                        <option>Western Europe</option>
                        <option>Eastern Europe</option>
                        <option>Northern Europe</option>
                        <option>Southern Europe</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={onSortName}>
                    Sort Name
                   </Button>
                <Button variant="primary" onClick={onSortPopulation}          >
                    Sort Population
                    </Button>
                <Button variant="primary" onClick={onSortRegion} >Sort Region
                         </Button>
            </React.Fragment>
        )
    }
}



