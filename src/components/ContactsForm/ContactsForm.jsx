import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, Input, Button } from './StyledComponents';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactsForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      alert('You have not entered all the data');
      return;
    }

    if (Number.isNaN(+this.state.number)) {
      alert('Phone number must contain only numbers');
      return;
    }
    this.props.addContact(this.state);
    this.setState(INITIAL_STATE);
  };

  resetForm = () => this.state(INITIAL_STATE);

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={this.handleInputChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            name="number"
            type="tel"
            value={number}
            placeholder="Enter phone number"
            onChange={this.handleInputChange}
          />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactsForm;
