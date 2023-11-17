import PropTypes from "prop-types";
import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.propTypes = {
  // You can declare that a prop is a specific JS primitive.
  // By default, these are all optional.
  message: PropTypes.string,
};

export default Message;
