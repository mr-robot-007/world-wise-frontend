import styles from './Button.module.css'
import PropTypes from "prop-types";


function Button({children, onClick , type}) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>{children}</button>
    )
}


Button.propTypes = {
    // You can declare that a prop is a specific JS primitive.
    // By default, these are all optional.
    children:PropTypes.string,
    onClick:PropTypes.func,
    type:PropTypes.string
  };
  

export default Button
