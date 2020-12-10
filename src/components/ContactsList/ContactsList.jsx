import React from 'react';
import PropTypes from 'prop-types';
import {
  TaskList,
  TaskItem,
  TaskItemElements,
  Button,
} from './StyledComponents';

export default function ContactsList({ items, onDeleteContact }) {
  return (
    <TaskList>
      {items.map(i => (
        <TaskItem key={i.id}>
          <TaskItemElements>{i.name} :</TaskItemElements>
          <TaskItemElements>{i.number}</TaskItemElements>
          <Button type="button" onClick={() => onDeleteContact(i.id)}>
            Delete
          </Button>
        </TaskItem>
      ))}
    </TaskList>
  );
}

ContactsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};
