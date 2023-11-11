import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//componentes
import Hearder from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CadastroBolo from './pages/CadastroBolo';
import  ListaBolo from './pages/ListaBolo';
//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


//BrouserRouter -> indica que tera uma congfiguracao de rotas
// Routes -> indica que tera uma  lista de rotas
// route -> indica que uma rotas de um respectivo componente


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*rotas*/} 
    {/*componetes*/}
    <BrowserRouter>
      <Hearder /> {/*1 */}

      <Routes>{/*2 */}
        <Route path='/'element ={<Home/>}/> {/* pagina principal */}
        <Route path='/cadastra/Bolo'element ={<CadastroBolo/>}/> {/* pagina principal */}
        <Route path='/lista/Bolo'element ={<ListaBolo/>}/>
      </Routes>

    <Footer/>{/*3*/}

    </BrowserRouter>

  </React.StrictMode>,
)

// path nome da rota 
// elemente -> componete