import { createContext, useContext, useEffect, useState } from "react"

export const MainContext = createContext()

export default function MainProvider({ children }) {
    const [totalValue, setTotalValue] = useState(0)
    const [totalWithChange, setTotalWithChange] = useState(0)
    const [selectedChange, setSelectedChange] = useState(0)
    const [quantityOfChange, setQuantityOfChange] = useState(0)
    const [change, setChange] = useState(0)
    const [amountPaid, setAmountPaid] = useState(0)
    const [message, setMessage] = useState("")
    const [correctChange, setCorrectChange] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const createRandomValue = (rangeOfValue) => {
        const randomNumber = Math.random() * rangeOfValue;
        return parseFloat(randomNumber.toFixed(2))
    }

    useEffect(() => {
        const randomValue = createRandomValue(100)
        setTotalValue(randomValue)
        setTotalWithChange(randomValue)
    }, [])

    return (
        <MainContext.Provider value={{
            totalValue,
            totalWithChange,
            setTotalValue,
            setTotalWithChange,
            selectedChange,
            setSelectedChange,
            quantityOfChange,
            setQuantityOfChange,
            change,
            setChange,
            amountPaid,
            setAmountPaid,
            message,
            setMessage,
            correctChange,
            setCorrectChange,
            isCorrect,
            setIsCorrect
        }}>
            {children}
        </MainContext.Provider>
    )
}

export function useMainContext() {
    const {
        totalValue,
        totalWithChange,
        setTotalValue,
        setTotalWithChange,
        selectedChange,
        setSelectedChange,
        quantityOfChange,
        setQuantityOfChange,
        change,
        setChange,
        amountPaid,
        setAmountPaid,
        message,
        setMessage,
        correctChange,
        setCorrectChange,
        isCorrect,
        setIsCorrect
    } = useContext(MainContext)

    return {
        totalValue,
        totalWithChange,
        setTotalValue,
        setTotalWithChange,
        selectedChange,
        setSelectedChange,
        quantityOfChange,
        setQuantityOfChange,
        change,
        setChange,
        amountPaid,
        setAmountPaid,
        message,
        setMessage,
        correctChange,
        setCorrectChange,
        isCorrect,
        setIsCorrect
    }
}