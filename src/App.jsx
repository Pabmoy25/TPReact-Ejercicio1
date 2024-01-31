import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Saludo from './components/Saludo'
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
    <section className='container mt-5 mainpage text-center'>
      <Saludo></Saludo>
    </section>

    <Footer></Footer>
    </>
  )
}

export default App
