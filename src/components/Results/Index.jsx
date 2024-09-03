import styles from './Results.module.css'
import { useMainContext } from '../../contexts/MainContext'
import useSelectCoinsAndBills from '../../hooks/useSelectCoinsAndBills'
import ValueHighlight from '../ValueHighlight/Index'

const Results = () => {
    const { change, totalWithChange } = useMainContext()
    const { currencyImages } = useSelectCoinsAndBills()

    return (
        <div className={styles.container}	>
            <p className={styles.totalText}>Total valor da compra + troco: <ValueHighlight>R$ {totalWithChange.toFixed(2)}</ValueHighlight></p>
            <p className={styles.totalText}>Total do troco: <ValueHighlight>R$ {change.toFixed(2)}</ValueHighlight></p>
            <p>Troco selecionado:</p>
            <div className={styles.imageContainer}>
                {currencyImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={image}
                        className={image.includes("centavos") || image.includes("real") ? styles.coin : styles.bill}
                    />
                ))}
            </div>
        </div>
    )
}

export default Results