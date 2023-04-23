export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};

export const handleFulfilledCreate = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = null;
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== payload.id);
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
