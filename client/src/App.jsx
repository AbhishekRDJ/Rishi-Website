
import './App.css'
import { Header, Footer } from './components/index'
import Container from './components/container/Container'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <div className="flex flex-col bg-[#FFFDF6] min-h-screen">
        <Header />
        <main className="flex-grow overflow-hidden">
          <Container>
            <Outlet />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
