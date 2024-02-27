import Navbar from './components/Navbar/Navbar'
import styles from './App.module.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contacts from './components/Contacts/Contacts'


function App() {
  
  return (
      <div className={styles.App}>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Contacts></Contacts>
        
      </div>
  )
}

export default App
