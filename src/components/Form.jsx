import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext';
import TransactionContext from '../context/TransactionContext';

const Form = () => {

    const {dark}= useContext(ThemeContext);
    const {addTransaction,edit,updateTransaction} = useContext(TransactionContext)

    const [text, setText] = useState("");
    const[amount, setAmount] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

       if(edit.isEdit){
        updateTransaction({
            id: edit.transaction.id,
            text,
            amount: +amount,
        });
       }else{
        addTransaction(text, amount);
       }

        setAmount("");
        setText("");
    }

    useEffect (()=>{
        setText(edit.transaction.text);
        setAmount(edit.transaction.amount);
    },[edit]);


    return (
         <div className={dark ? "card p-2 bg-secondary text-light" : "card p-2"}>
         <h5 className="text-center mt-2">Record Your Transaction</h5>
         <form className="my-2" onSubmit={handleSubmit}>
            <input type="number" placeholder="Enter Amount" className="form-control my-2" 
            onChange={(e)=> setAmount(e.target.value)}  
            value={amount}  >    
            </input>
            <input type="text" placeholder="Enter Description" className="form-control my-2"
            onChange={(e)=> setText(e.target.value)}  
            value={text}  >
            </input>
            <button className={dark ? "btn btn-dark w-100" : "btn btn-success w-100"}>Save Transaction</button>
        </form>
     </div>          
    )
}

export default Form
