import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContacts,
  deleteContacts,
  getContacts,
} from 'contactsApi/contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
  return getContacts();
});

export const addContact = createAsyncThunk('contacts/addContact', data => {
  return createContacts(data);
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', id => {
  return deleteContacts(id);
});
