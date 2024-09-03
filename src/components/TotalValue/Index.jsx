import styles from './TotalValue.module.css'
import { useMainContext } from '../../contexts/MainContext'
import Input from '../Input/Index'
import ValueHighlight from '../ValueHighlight/Index'
import RoundedValue from '../RoundedValue/Index'

const TotalValue = () => {
  const { totalValue, amountPaid, setAmountPaid } = useMainContext()

  return (
    <div className={styles.container}>
      <p className={styles.total}>Total da compra: <ValueHighlight>R$ {totalValue}</ValueHighlight></p>
      <RoundedValue />
      <Input
        onChange={(e) => setAmountPaid(e.target.value)}
        label="Valor pago pelo cliente:"
        placeholder="00.00"
        type="number"
        value={amountPaid}
      />
    </div>
  )
}

export default TotalValue