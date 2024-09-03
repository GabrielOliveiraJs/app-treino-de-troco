export default function useRoundValue() {
    let roundedValue = 0

    const roundValue = (value) => {
        const totalToString = String(value.toFixed(2))
        const cents = totalToString.split('.')[1]
        let lastDigit = cents.slice(-1)
        lastDigit = Number(lastDigit)
        let diff = 0

        if (lastDigit > 0 && lastDigit < 5) {
            roundedValue = value - lastDigit / 100

        } else if (lastDigit > 5 && lastDigit <= 9) {
            diff = 10 - lastDigit
            roundedValue = value + diff / 100

        } else {
            roundedValue = value
        }

        return parseFloat(roundedValue.toFixed(2))
    }

    return {
        roundValue
    }
}