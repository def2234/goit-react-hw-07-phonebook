export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
  state.contacts.error = null;
};

export const handleFulfilledCreate = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
  state.contacts.error = null;
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== payload.id
  );
  state.contacts.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
