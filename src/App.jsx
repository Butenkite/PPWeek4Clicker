import viteLogo from '/vite.svg'
import ClickerGame from './components/clickerGame.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
    <Header/>
      <div>
        <ClickerGame/>
      </div>
    <Footer/>
    </>
  )
}

export default App
