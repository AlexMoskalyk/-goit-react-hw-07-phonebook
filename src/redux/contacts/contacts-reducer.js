import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
} from "./contacts-actions";

//==============================toolkit============================

const itemsReducer = createReducer([], {
  [addContactsSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [getContactsSuccess]: (_, action) => action.payload,
  [deleteContactsSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

const errorReducer = createReducer(null, {
  [addContactsError]: (_, action) => action.payload,
  [addContactsRequest]: () => null,

  [getContactsError]: (_, action) => action.payload,
  [getContactsRequest]: () => null,
});

const loaderReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

//===========================redux======================================
// const items = (
//   state = [
//     { id: "id-1", contactName: "Rosie Simpson", contactNumber: "4591256" },
//     { id: "id-2", contactName: "Hermione Kline", contactNumber: "4438912" },
//     { id: "id-3", contactName: "Eden Clements", contactNumber: "6451779" },
//     { id: "id-4", contactName: "Annie Copeland", contactNumber: "2279126" },
//   ],

//   action
// ) => {
//   switch (action.type) {
//     case "contacts/addNewContact":
//       return [...state, action.payload];
//     case "contacts/getContacts":
//       return action.payload;
//     case "contacts/deleteContact":
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", action) => {
//   switch (action.type) {
//     case "contacts/changeFilter":
//       return action.payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
  loader: loaderReducer,
});
