import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Contact, Profiles, Hero, Navbar, Works, StarsCanvas, CustomCursor, Skills, Experience, Education, Projects } from './components'
import { ThemeProvider } from './components/navbar'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className='relative z-0 bg-primary'>
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <div className="relative z-0">
                  <StarsCanvas />
                </div>
              </>
            } />
            <Route path="/home" element={
              <>
                <Hero />
                <About />
                <div className="relative z-0">
                  <StarsCanvas />
                </div>
              </>
            } />
            <Route path="/skills" element={
              <>
                <Skills />
                <Profiles />
              </>
            } />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
