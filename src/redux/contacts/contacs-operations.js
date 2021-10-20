import axios from "axios";
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
} from "./contacts-actions";

const addContactOperation = (contact) => async (dispatch) => {
  dispatch(addContactsRequest());
  try {
    const response = await axios.post(
      `http://localhost:3004/contacts`,
      contact
    );

    dispatch(addContactsSuccess(response.data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

const getContactsOperation = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get(`http://localhost:3004/contacts`);
    console.log(response.data);

    dispatch(getContactsSuccess(response.data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(deleteContactsRequest());
  try {
    await axios.delete(`http://localhost:3004/contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

export { addContactOperation, getContactsOperation, deleteContactOperation };
