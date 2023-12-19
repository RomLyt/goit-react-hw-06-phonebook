import { createSlice } from '@reduxjs/toolkit';

//Початкове значення масива contacts у redux-стейті
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '+38-097-459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '+38-095-443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '+38-067-645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '+38-050-227-91-26' },
  ],
};

//Створюємо contactsSlice
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
      //   state.contacts.push(action.payload) - можна також напряму пушити масив, бо спрацює ліба Immer та виконує оновлення імутабельно
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions; // Експортуємо actions у зовнішній код
export const contactsReducer = contactsSlice.reducer; // Експортуємо filterReducer у зовнішній код
