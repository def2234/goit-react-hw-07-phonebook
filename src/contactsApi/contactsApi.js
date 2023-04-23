const BASE_URL = 'https://644427b8466f7c2b4b63094a.mockapi.io';

export const getContacts = async (_, thunkAPI) => {
  try {
    const contacts = await fetch(`${BASE_URL}/contacts`);
    const response = await contacts.json();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const createContacts = async (data, thunkAPI) => {
  try {
    const contact = await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const response = await contact.json();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const deleteContacts = async (id, thunkAPI) => {
  try {
    const contact = await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'DELETE',
    });
    const response = await contact.json();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
