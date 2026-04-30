import React, {useContext,useState, useEffect} from "react";
import transactionBar from "./transactionBar";
import PagNavigation from "./pagNavigationBar";
import {transationContext} from '../context/allcontext'

const transactionsBody = () => {

    const [transactionData, setTransactionData] = useContext(transationContext)
    const [pages, setPages] = useState({currentPage: 1, totalPages: 1})


    useEffect(() => {
        onLoad()
    }, [transactionData])

    const displayTransactions = () => {
        let key = 0
        if(transactionData && transactionData.length) {
        let arr=[]
        const startIndex = 5 * (pages.currentPage - 1)
        const endIndex = (5 * pages.currentPage)-1

        for(let i = startIndex; i <= endIndex ; i++) {
            if(i>=transactionData.length) break;
            const {name,data,price,catagory,id}=transactionData[i]
            arr.push(
            <TransactionBar key={`${key++}`} name={name} data={data} amount={price} catagory={catagory} id={id} />)
        }
        return arr
    }
}


    const onLoad = () => {
        setPages({currentPage:1, totalPages: Math.ceil(transactionData.length / 5)})
    }

    const updatePage = (direction) => {
        let {currentPage,totalPages} = pages
        if(direction === "right" && currentPage <totalPages) {
            setPages({...pages,currentPage:currentPage + 1})
        }
        if(direction === "left" && currentPage > 1) {
            setPages({...pages,currentPage:currentPage - 1})
        }
    }

    return (
        <div className="transactions-body">
            <div className="transactionBodyUpper">
                <div className="transationPage">{displayTransactions}</div>
            </div>
            <div className="transationBodyLower">
                <PagNavigation key={"pageNavigate"} page={pages} updatePage={updatePage} />
            </div>
        </div>
    )
}

export default transactionsBody;
