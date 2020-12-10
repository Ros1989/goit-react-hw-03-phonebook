import React, { Component } from 'react';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import SectionBlock from './Section';
import ContactsFilter from './ContactsFilter';

import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [],
    nameFilter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is in the list of your contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(state => {
      return { contacts: [...state.contacts, contact] };
    });
  };

  filterContactList = () => {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(e => e.id !== id),
      };
    });
  };

  contactsFilterInput = inputValue => {
    this.setState({
      nameFilter: inputValue,
    });
  };

  render() {
    const { nameFilter } = this.state;
    const visibleContacts = this.filterContactList();
    return (
      <>
        <SectionBlock title="Phonebook">
          <ContactsForm addContact={this.addContact} />
          <ContactsFilter
            value={nameFilter}
            OnInputFilter={this.contactsFilterInput}
          />
          <ContactsList
            items={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </SectionBlock>
      </>
    );
  }
}
