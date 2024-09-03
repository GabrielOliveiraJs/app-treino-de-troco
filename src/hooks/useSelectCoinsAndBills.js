import currencys from '../db/currencys.json'
import { useMainContext } from '../contexts/MainContext'
import { useEffect, useState } from 'react'

export default function useSelectCoinsAndBills() {
    const { selectedChange, quantityOfChange } = useMainContext()
    const [currencyImages, setCurrencyImages] = useState([])

    const findImage = () => {
        currencys.forEach((currency) => {
            if (currency.value === selectedChange) {
                setCurrencyImages([...currencyImages, currency.image])
            }
        })
    }

    useEffect(() => {
        findImage()
    }, [quantityOfChange])

    return {
        currencyImages
    }
}