import react,{useContext,useState,useEffect} from "react"
import { transationContext } from "../context/allcontext"
const useChartData = () => {
    const [transactionData, setTransactionData] = useContext(transationContext);
    const [chartData, setChartData] = react.useState(initialData);

    useEffect(() => {
        setChartData([
            { name: 'Food', value: 0 },
            { name: 'Entertainment', value: 0 },
            { name: 'Travel', value: 0 },
        ]);
        calculateCategories();
    }, [transactionData]);

    const calculateCategories = () => {
        let foodTotal = 0, entertainmentTotal = 0, travelTotal = 0;
        transactionData.forEach(item => {
            if (item.category=== 'food') {
                foodTotal += Number(item.price);
                setChartData(pre => [pre[0],{name:'food',value:foodTotal},pre[2]])
            }
            if(item.category==="entertainment"){
                entertainmentTotal += Number(item.price);
                setChartData(pre => [pre[0],pre[1],{name:'entertainment',value:entertainmentTotal}])
            }
            if(item.category==="travel"){
                travelTotal += Number(item.price);
                setChartData(pre => [{name:'food',value:foodTotal},pre[1],{name:'travel',value:travelTotal}])
            }
        });
    };
    return chartData;
};

export default useChartData;
