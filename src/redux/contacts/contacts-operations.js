import axios from "axios";
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch(error) {
    dispatch(fetchContactsError(error));
  }
  // axios
  //   .get("/contacts")
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch((error) => dispatch(fetchContactError(error)));
};

// const addContact = ( name, number ) => async dispatch => {
//   const contact = { name, number };
//   dispatch(addContactRequest());
const addContact = contact => async dispatch => {
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
  // axios
  //   .post("/contacts", contact)
  //   .then(({ data }) => dispatch(addContactSuccess(data)))
  //   .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (id) => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
  // axios
  //   .delete(`/contacts/${id}`)
  //   .then(() => dispatch(deleteContactSuccess(id)))
  //   .catch((error) => dispatch(deleteContactError(error)));
};
 
export { fetchContacts, addContact, deleteContact };