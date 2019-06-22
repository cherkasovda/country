import React, { Component, Fragment} from "react"
import { Modal, Button } from "react-bootstrap"
import ItemAddForm from "../item-add-form/item-add-form"

class Popup extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <Fragment>
                <Button variant="primary" onClick={this.handleShow}>
                    Add country
                    </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ItemAddForm onItemAdded={this.props.onItemAdded} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
            </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Popup