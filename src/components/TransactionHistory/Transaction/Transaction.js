import PropTypes from 'prop-types';
import s from './Transaction.module.css'


function Transaction({type, amount, currency}) {
    return <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td></>
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
export default Transaction