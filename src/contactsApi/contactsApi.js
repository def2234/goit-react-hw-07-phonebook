import axios from 'axios';

axios.defaults.baseURL = 'https://644427b8466f7c2b4b63094a.mockapi.io';

export const getContacts = async (_, thunkAPI) => {
  try {
    const contacts = await axios.get('/contacts');

    return contacts.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const createContacts = async (data, thunkAPI) => {
  try {
    const contact = await axios.post('/contacts', data);

    return contact.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const deleteContacts = async (id, thunkAPI) => {
  try {
    const contact = await axios.delete(`/contacts/${id}`);

    return contact.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
