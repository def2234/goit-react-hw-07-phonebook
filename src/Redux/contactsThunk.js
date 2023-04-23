import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContacts,
  deleteContacts,
  getContacts,
} from 'contactsApi/contactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', () => {
  getContacts();
});

export const addContact = createAsyncThunk('contacts/addContact', data => {
  createContacts(data);
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', id => {
  deleteContacts(id);
});
