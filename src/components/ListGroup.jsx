import React, { useContext } from 'react'
import ListItem from './ListItem'
import ThemeContext from '../context/ThemeContext'
import TransactionContext from '../context/TransactionContext';

const ListGroup = () => {

const {dark} = useContext(ThemeContext);

const {transactions, removeTransaction,editTransaction} = useContext(TransactionContext);

  if(transactions.length===0){
    return (
      <h3 className={dark ? "my-2 text-center text-light" : "my-2 text-center"}>No Transaction Yet</h3>
    )
  }

  return (
    <div>
      <h2 className={dark ? "my-2 text-center text-light" : "my-2 text-center"}>All Transactions</h2>
      <div className="list-group my-2">
      {
        transactions.map(transaction => <ListItem dark={dark} key={transaction.id} transaction={transaction} removeTransaction={removeTransaction} editTransaction={editTransaction}/>)
      }
        </div>
    </div>
  )
}

export default ListGroup
