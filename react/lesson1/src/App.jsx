import './App.css'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MainComponent from "./components/main/MainComponent"

function App() {
  const titles = {
    header: 'HEADER',
    main: 'MAIN',
    footer: 'FOOTER'
  }

  return (
    <>
      <Header titleName={titles.header} />
      <MainComponent titleName={titles.main} />
      <Footer titleName={titles.footer} />
    </>
  )
}

export default App
