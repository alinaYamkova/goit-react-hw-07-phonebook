import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from "../ContactList/phonebook.module.css";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact, isLoadingContacts } = this.props;
    
    return (
      <>
        {isLoadingContacts && <h1 className={s.laoding}>Загружаем....</h1>}
        <ol>
          {contacts.map(({ id, name, number }) => (
            <li className={s.list} key={id}>
              <p className={s.text}>{name}, </p>
              <p className={s.text}>tlf.: {number}</p>
              <button
                type="button"
                className={s.btn_del}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </>
    );
  };
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

// const showFilteredContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//      contact.name.includes(normalizedFilter)
//   );
// };

const { getLoading, showFilteredContacts } = contactsSelectors;

const mapStateToProps = (state) => {
  // const {items, filter } = state.contacts;
  return { 
    isLoadingContacts: getLoading(state),
    contacts: showFilteredContacts(state) 
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
});
    
export default connect(mapStateToProps,mapDispatchToProps) (ContactList);