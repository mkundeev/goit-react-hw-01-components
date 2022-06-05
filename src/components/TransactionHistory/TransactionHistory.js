import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'
import Transaction from './Transaction/Transaction.js'

function TransactionHistory({items}) {
    return <table className={s.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
      { items.map(item => 
        (<tr key={item.id}>
            <Transaction
            type = {item.type}
            amount= {item.amount}
            currency= {item.amount}
            />
        </tr>)
        )}
  </tbody>
</table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired, 
};
export default TransactionHistory