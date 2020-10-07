import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Books from "../bookTitles.json";

const modalStyle = {
  backgroundColor: "black"
};

const formStyle = {
  texttColor: "white"
};

const buttonStyle = {
  color: "black"
};

class NewBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      status: "Want To Read"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      title: ""
    }));
  }

  handleInputChange = event => {
    const { value } = event.target;

    this.setState({
      title: value,
      status: "Want To Read"
    });
  };

  handleFormSubmit = event => {
    Books.data.push({
      index: Books.data.length,
      title: this.state.title,
      status: this.state.status
    });
    event.preventDefault();
    this.setState({
      title: ""
    });
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          style={buttonStyle}
          className="btn-sm"
          onClick={this.toggle}
          color="warning"
        >
          + Add Book
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          style={modalStyle}
        >
          <ModalHeader toggle={this.toggle}>
            Add New Book &nbsp;
            <span role="img" aria-label="books">
              📚
            </span>
          </ModalHeader>
          <ModalBody>
            <Form style={formStyle}>
              <FormGroup>
                <Label for="exampleEmail">Title:</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={this.state.title}
                  placeholder="i.e. The Catcher in the Rye"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="warning"
              onClick={this.handleFormSubmit}
              style={buttonStyle}
            >
              Add
            </Button>{" "}
            <Button className="btn-outline-danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewBookModal;
