import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import TransactionContext from '../context/TransactionContext';

const Dashboard = () => {

  const {dark} = useContext(ThemeContext);
  const {transactions} = useContext(TransactionContext);

const income =transactions
.filter(transaction => transaction.amount > 0)
.reduce((p,c)=> p+c.amount , 0);

const expense =transactions
.filter(transaction => transaction.amount < 0)
.reduce((p,c)=> p+c.amount , 0);

const balance = transactions.reduce((p,c) => p+c.amount, 0);

  return ( 
         <div className="row g-2 my-3">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={dark ? "card p-5 bg-secondary text-light" : "card p-5 bg-success text-light"}>
              <h3>Total Income:</h3>
              <h1>{income}</h1>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className={dark ? "card p-5 bg-secondary text-light" : "card p-5 bg-danger text-light"}>
              <h3>Total Expense:</h3>
              <h1>{expense}</h1>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className={dark ? "card p-5 bg-secondary text-light" : "card p-5 bg-warning text-light"}>
              <h3>Total Balance:</h3>
              <h1>{balance}</h1>
            </div>
          </div>
        </div>
  )
}

export default Dashboard
