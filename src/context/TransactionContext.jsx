import { createContext, useState } from "react";


const TransactionContext = createContext();

export const TransactionProvider = ({children}) =>{

    const[transactions, setTransactions] = useState([]);

    const[edit, setEdit] = useState({
      transaction:{},
      isEdit:false,
    })
     
    //  Add Transactions
    
    const addTransaction = (text , amount) =>{
    
      const newTransaction = {
        id:crypto.randomUUID(), text:text, amount:parseInt(amount) 
      }
    
    setTransactions([
      newTransaction,
      ...transactions]);
    }
    
      // Remove Transaction
    
    const removeTransaction = (id) =>{
      setTransactions(transactions.filter((item)=> item.id !== id))
    }
    
      // Edit Transaction
    
      const editTransaction = (transaction) =>{
        setEdit({
          transaction:transaction,
          isEdit:true,
        })
      }
    
      // Update Transaction
    
      const updateTransaction = (updatedTransaction)=>{
        setTransactions(transactions.map((item) =>item.id===updatedTransaction.id ? updatedTransaction: item))
        setEdit({transaction:{}, isEdit : false})
      };
    

return(
    <TransactionContext.Provider value={{edit,transactions, editTransaction,addTransaction,updateTransaction,removeTransaction}}>
        {children}
    </TransactionContext.Provider>
)

}

export default TransactionContext;
