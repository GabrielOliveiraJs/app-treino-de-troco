import styles from './RoundedValue.module.css'
import { useState } from 'react'
import { useMainContext } from '../../contexts/MainContext'
import useRoundValue from '../../hooks/useRoundValue'
import Button from '../Button/Index'
import ValueHighlight from '../ValueHighlight/Index'

const RoundedValue = () => {
  const [hidden, setHidden] = useState(false)
  const { totalValue } = useMainContext()
  const { roundValue } = useRoundValue()

  return (
    <div className={styles.container}>
      {
        hidden === false ? (
          <Button onClick={() => setHidden(true)}>
            Ver total arredondado
          </Button>
        ) :
          null
      }
      {
        hidden === true ? (
          <p>Total arredondado: <ValueHighlight>R$ {roundValue(totalValue)}</ValueHighlight></p>
        ) :
          null
      }
    </div>
  )
}

export default RoundedValue