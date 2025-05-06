import { createSlice, configureStore } from '@reduxjs/toolkit'; 
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      contacts: [],
      loading: false,
      error: false,
    },
    reducers: {
      fetchContactsLoading: (state) => {
        state.loading = true;
        state.error = false; // Đặt lại error nếu cần
      },
      fetchContactsSuccess: (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
        state.error = false;
      },
      fetchContactsError: (state) => {
        state.loading = false;
        state.error = true;
      },
    },
  });
   //MSSV 2124802010728 - Võ Ngân Khanh

  export const {
    fetchContactsLoading,
    fetchContactsSuccess,
    fetchContactsError,
  } = contactsSlice.actions;
  
  const Store = configureStore({
    reducer: contactsSlice.reducer,
  });
  
  export default Store;