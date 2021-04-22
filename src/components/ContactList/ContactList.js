import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from '../../Loader/Loader';
import PropTypes from "prop-types";
import s from "../ContactList/phonebook.module.css";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors  from "../../redux/contacts/contacts-selectors"

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { contacts, onDeleteContact } = this.props;
    
    return (
      <>
        {/* {isLoadingContacts && <h1 className={s.loading}><Loader /></h1>} */}
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

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.showFilteredContacts(state),
  // isLaodingContacts: getLoading(state),
  filterVal: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});
    
export default connect(mapStateToProps,mapDispatchToProps) (ContactList);