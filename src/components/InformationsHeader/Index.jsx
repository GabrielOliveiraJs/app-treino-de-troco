import styles from './InformationsHeader.module.css'
import useCalculateAnswer from '../../hooks/useCalculateAnswer'
import TotalValue from '../TotalValue/Index'
import Results from '../Results/Index'
import Answer from '../Answer/Index'
import Button from '../Button/Index'

const InformationsHeader = () => {
  const { checkAnswer } = useCalculateAnswer()

  return (
    <section className={styles.container}>
      <div className={styles.informationsContainer}>
        <TotalValue />
        <Results />
      </div>
      <Button onClick={checkAnswer}>
        Calcular
      </Button>
      <Answer />
    </section>
  )
}

export default InformationsHeader