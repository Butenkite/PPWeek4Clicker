import ClickerGame from './components/clickerGame.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header className = "header"/>
      <ClickerGame/>
      <Footer className = "footer"/>
    </>
  )
}

export default App
