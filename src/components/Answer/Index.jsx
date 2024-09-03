import styles from './Answer.module.css'
import { useMainContext } from '../../contexts/MainContext'
import Button from '../Button/Index'

const Answer = () => {
  const { message, correctChange, isCorrect } = useMainContext()

  return (
    <div className={styles.answerContainer}>
      {message !== "" ? <p className={isCorrect ? styles.correctAnswer : styles.incorrectAnswer}>{message}</p> : null}
      <ul className={styles.changeContainer}>
        {
          correctChange.length > 0 &&
          correctChange.map((item, index) => (
            <li key={index}>
              <img src={item} alt={item} />
            </li>
          ))}
      </ul>
      {
        message ? <Button onClick={() => window.location.reload()}>Nova Simulação</Button>
          : null
      }
    </div>
  )
}

export default Answer