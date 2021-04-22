import { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations} from "../../redux/contacts/contacts-operations";
import { contactsSelectors} from "../../redux/contacts/contacts-selectors"; 
import s from "../ContactList/phonebook.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = this.state;
    const { contacts } = this.props;
    // if ( name !== '' && value !== '') {
    //   this.props.addNewContact(this.state);
    //   this.reset();
    //   return;
    // }
    const uniqueContact = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (uniqueContact) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              id={uuidv4()}
              className={s.input}
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="name"
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              id={uuidv4()}
              value={this.state.number}
              onChange={this.handleChange}
              type="text"
              name="number"
              placeholder="number"
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}


// const mapDispatchToProps = (state) => ({
//   addNewContact: (contact) => dispatch(actions.addContact(contact)),
// });
    
// export default connect(mapStateToProps,mapDispatchToProps) (ContactForm);
const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(contactsOperations.addContact (contact)),
});
    
export default connect(mapStateToProps,mapDispatchToProps) (ContactForm);