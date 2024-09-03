import { useEffect } from "react"
import { useMainContext } from "../contexts/MainContext"

export default function useHandleChange() {
    const { change, setChange, totalWithChange, setTotalWithChange, selectedChange } = useMainContext()

    const sumValues = (value) => {
        setChange(change + value)
    }

    const sumTotal = () => {
        setTotalWithChange(totalWithChange + selectedChange)
    }

    useEffect(() => {
        sumTotal()
    }, [change])

    return {
        sumValues
    }
}
