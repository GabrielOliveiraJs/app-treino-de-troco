import styles from './MoneyContainer.module.css'
import coins from '../../db/coins.json'
import bills from '../../db/bills.json'
import { useMainContext } from '../../contexts/MainContext'
import useHandleChange from '../../hooks/useHandleChange'
import Coin from './Coin/Index'
import Bill from './Bill/Index'

const MoneyContainer = () => {
  const { sumValues } = useHandleChange()
  const { setSelectedChange, quantityOfChange, setQuantityOfChange } = useMainContext()

  const getValue = (value) => {
    sumValues(value)
    setSelectedChange(value)
    setQuantityOfChange(quantityOfChange + 1)
  }

  return (
    <section className={styles.moneyContainer}>
      <div className={styles.coinsContainer}>
        {
          coins.map((coin) => (
            <Coin key={coin.name} {...coin} onClick={() => getValue(coin.value)} />
          ))
        }
      </div>
      <div className={styles.billsContainer}>
        {
          bills.map((bill) => (
            <Bill key={bill.name} {...bill} onClick={() => getValue(bill.value)} />
          ))
        }
      </div>
    </section>
  )
}

export default MoneyContainer