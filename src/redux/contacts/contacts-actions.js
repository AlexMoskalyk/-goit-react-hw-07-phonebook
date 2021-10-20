// import { v4 as uuidv4 } from "uuid";

import { createAction } from "@reduxjs/toolkit";

//=======================toolkit========================
// export const setLoader = createAction(SETLOADER);
// export const setError = createAction(SETERROR);
// export const changeFilter = createAction(CHANGE_FILTER);
// export const deleteContact = createAction(DELETE_CONTACT);
// export const getAllContacts = createAction(GET_ALL_CONTACTS);
// export const addNewContact = createAction(ADD_NEW_CONTACT);

export const getContactsRequest = createAction("contacts/getContactsRequest");
export const getContactsSuccess = createAction("contacts/getContactsSuccess");
export const getContactsError = createAction("contacts/getContactsError");
//==============================
export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccess = createAction("contacts/addContactsSuccess");
export const addContactsError = createAction("contacts/addContactsError");
//=========================
export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");
//================
export const changeFilter = createAction("contacts/changeFilter");

//=======================redux===========================
// export const addNewContact = (contact) => {
//   return {
//     type: ADD_NEW_CONTACT,
//     payload: {
//       id: uuidv4(),
//       contactName: contact.contactName,
//       contactNumber: contact.contactNumber,
//     },
//   };
// };

// export const getAllContacts = (contacts) => {
//   return {
//     type: GET_ALL_CONTACTS,
//     payload: contacts,
//   };
// };

// export const deleteContact = (id) => {
//   return {
//     type: DELETE_CONTACT,
//     payload: id,
//   };
// };

// export const changeFilter = (value) => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
