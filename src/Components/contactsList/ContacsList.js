import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import styles from "../contactsList/ContactsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactOperation } from "../../redux/contacts/contacs-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selector";

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loader);
  const error = useSelector((state) => state.contacts.error);

  const filtredContacts = useSelector(getFilteredContacts);

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading ? (
        <h2>...loading</h2>
      ) : (
        <ul className={styles.ul}>
          {filtredContacts.map((item) => (
            <li className={styles.li} key={item.id}>
              <span>{item.contactName}</span>
              <span>{item.contactNumber}</span>
              <button
                type="button"
                onClick={() => dispatch(deleteContactOperation(item.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContacts.filter((contact) =>
//     contact.contactName.toLowerCase().includes(normalizedFilter)
//   );
// };

// const mapStateToProps = (state) => ({
//   contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
// });

// const mapDispatchToProps = {
//   deleteContact,
// };

// ContactList.propTypes = {
//   allContacts: PropTypes.string,
//   filter: PropTypes.string,
// };
export default ContactList;
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
