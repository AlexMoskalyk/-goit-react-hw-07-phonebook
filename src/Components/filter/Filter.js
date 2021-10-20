import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selector";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <label>
      Search
      <input
        className={styles.Input}
        onChange={onHandleChange}
        value={filter}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = {
//   onChange: (e) => changeFilter(e.target.value),
// };

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
export default Filter;
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
