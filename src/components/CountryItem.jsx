import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  // You can declare that a prop is a specific JS primitive.
  // By default, these are all optional.
  country: PropTypes.object,
};
export default CountryItem;
