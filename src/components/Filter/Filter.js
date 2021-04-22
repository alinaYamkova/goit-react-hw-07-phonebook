import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import s from "../ContactList/phonebook.module.css";
import actions from '../../redux/contacts/contacts-action';

const Filter = ({ filterVal, onChangeFilter  }) => (
  <label className={s.filter_label}>
    To make filter by Name
    <input
      className={s.filter_input}
      type='text'
      value={filterVal}
      onChange={onChangeFilter }
    />
  </label>
);

Filter.propTypes = {
  filterVal: PropTypes.string.isRequired,
  onChangeFilter : PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterVal: state.contacts.filter,
});

//фыльтрування 
//  filteredContacts = (e) => {
//   this.setState({ filter: e.target.value });
// };

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
