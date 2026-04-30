import { useState,useRef,useEffect } from 'react'
import './App.css'
import Navbar from 'components/navbar'
import AppHead from 'components/AppHead'
import AppBody from 'components/appBody'
import {transationContext,moneyContext} from 'context/allcontext'
import {dummyData} from './dummyteansation'
// import Header from './header'
// import Body from './body'
// import { useForkRef } from '@mui/material'

const defaultMoney = {
  balance: 5000,
  expenses: dummyData.reduce((total, transaction) => total + Number(transaction.amount), 0)
}

function App() {
  const [money, setMoney] = useState(defaultMoney)
  const [transactionData, setTransactionData] = useState(dummyData)
  const initialRender = useRef(true)

  useEffect(() => {
    if(initialRender.current) {
      onload() 
      return (()=>{initialRender.current = false})
    }
  }, [])

  useEffect(() => {
    if(!initialRender.current) {
      localStorage.setItem("all Data", JSON.stringify({money, transactionData}))
      localStorage.setItem("expenses", JSON.stringify(transactionData))
    }
  }, [money, transactionData])

    const onload = () => {
      const storedData = localStorage.getItem("all Data") || localStorage.getItem("expenses")
      if(storedData) {
        const {money, transactionData} = JSON.parse(storedData)
        if(parsedData && parsedData.money && parsedData.transactionData) {
          setMoney(money)
          setTransactionData(transactionData)
        }else if(Array.isArray(parsedData)) {
          const expensesTotal = parsedData.reduce((total, transaction) => total + Number(transaction.price), 0)
          setMoney({balance: defaultMoney.balance, expenses: expensesTotal})
          setTransactionData(parsedData)
        }
      }
    }

  return (
  <>
    <main className='App'>
      <moneyContext.Provider value={{money, setMoney}}>
        <transationContext.Provider value={{transactionData, setTransactionData}}>
          <Navbar/>
          <AppHead balance={money.balance} expenses={money.expenses}/>
          <AppBody transactionData={transactionData}/>
        </transationContext.Provider>
      </moneyContext.Provider>
    </main>
  </>
  )
}

export default App


// https://github.com/nishchayjainit20-a11y/xpense-tracker