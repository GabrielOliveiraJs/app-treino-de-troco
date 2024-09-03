import { useState } from "react"
import { useMainContext } from "../contexts/MainContext"
import useRoundValue from "./useRoundValue"
import currencys from "../db/currencys.json"

export default function useCalculateAnswer() {
    const { totalValue, amountPaid, totalWithChange, setMessage, setCorrectChange, setIsCorrect } = useMainContext()
    const { roundValue } = useRoundValue()
    const [roundedTotalWithChange, setRoundedTotalWithChange] = useState(0)
    const [roundedTotalValue, setRoundedTotalValue] = useState(0)

    const getCorrectChange = () => {
        const roundedValue = roundValue(totalValue)
        let change = amountPaid - roundedValue // Troco a ser dado
        const newCorrectChange = [] //Array temporário para armazenar as imagens
        let index = currencys.length - 1 // Começa do maior valor

        while (change > 0 && index >= 0) {
            if (currencys[index].value <= change) {
                change -= currencys[index].value //Subtrai o valor do troco
                change = parseFloat(change.toFixed(2)) // Corrige possíveis problemas de precisão
                newCorrectChange.push(currencys[index].image) // Adiciona a imagem ao array
            } else {
                index-- // Passa para a próxima cédula/moeda
            }
        }

        setCorrectChange(newCorrectChange) // Atualiza o estado com as novas imagens
    }

    const checkAnswer = () => {
        const roundedChange = roundValue(totalWithChange)
        const roundedValue = roundValue(totalValue)
        setRoundedTotalWithChange(roundedChange)
        setRoundedTotalValue(roundedValue)

        const paidAmount = parseFloat(amountPaid)

        if (isNaN(paidAmount) || paidAmount <= 0 || paidAmount < roundedValue) {
            alert("Valor pago inválido!")
            return
        }

        const difference = Math.abs(parseFloat(amountPaid) - roundedChange)
        const tolerance = 0.01

        if (difference < tolerance) {
            setMessage("Parabéns, você acertou o troco!")
            setIsCorrect(true)
        } else {
            setMessage("Troco incorreto, correto:")
            getCorrectChange()
        }

    }

    return {
        checkAnswer,
        roundedTotalWithChange,
        roundedTotalValue
    }
}