// import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeHeader from './components/HomeHeader.js'
import HomeSection from './components/HomeSection.js'

import AddHeader from './components/AddHeader.js'
import AddSection from './components/AddSection.js'

import BuscarHeader from './components/BuscarHeader.js'
import BuscarSection from './components/BuscarSection.js'

import ColecaoHeader from './components/ColecaoHeader.js'
import ColecaoSection from './components/ColecaoSection.js'

function App() {
  return (<Router>
      <Route path='/' exact render={(props) => (<>
        <HomeHeader />
        <HomeSection />
      </>)} />

      <Route path='/adicionar' exact render={(props) => (<>
        <AddHeader />
        <AddSection />
      </>)} />

      <Route path='/buscar' exact render={(props) => (<>
        <BuscarHeader />
        <BuscarSection />
      </>)} />

      <Route path='/buscar' exact render={(props) => (<>
        <ColecaoHeader />
        <ColecaoSection />
      </>)} />
  </Router>);
}

export default App;
