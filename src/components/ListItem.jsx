import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import TransactionContext from '../context/TransactionContext';

const ListItem = ({transaction}) => {

    console.log(transaction)
    const {dark} = useContext(ThemeContext);

    const { removeTransaction, editTransaction}= useContext(TransactionContext);
    return (
            <div className="list-group-item">
                <h3>{transaction.text} : {transaction.amount}</h3>
                <span className="float-end">
                    <button className={dark ? "btn btn-dark mx-1" : "btn btn-warning mx-1"}
                    onClick= {() => editTransaction(transaction)}   >
                    Edit</button>
                    <button className={dark ? "btn btn-dark" : "btn btn-danger"}
                    onClick={()=> removeTransaction(transaction.id)}>
                    Delete</button>
                </span>
            </div>
    )
}

export default ListItem
