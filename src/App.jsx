import './App.css'
import MainProvider from './contexts/MainContext'
import InformationsHeader from './components/InformationsHeader/Index'
import MoneyContainer from './components/MoneyContainer/Index'

function App() {
  return (
    <main className='mainContainer'>
      <h1>Treino de Troco</h1>
      <MainProvider>
        <InformationsHeader />
        <MoneyContainer />
      </MainProvider>
    </main>
  )
}

export default App
