import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import Dashboard from './components/Dashboard'
import { ThemeProvider } from './context/ThemeContext'
import { TransactionProvider } from './context/TransactionContext'

const App = () => {

const[dark, setDark] = useState(false);

const changeTheme= () => {
  setDark (dark ? false : true)
}




  return (
    <ThemeProvider>
      <TransactionProvider>
      <Navbar />
      <div className={dark ? "container-fluid p-5 bg-dark" : "container-fluid p-5"}>
        <Form />
        <Dashboard />
        <ListGroup />
      </div>
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
