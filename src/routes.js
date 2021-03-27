import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

// O Router é o que encapsula todas as rotas para buscar as páginas da aplicação
// O Switch auxilia na troca de rotas dinamicamente
// o Route é o component que recebe a rota e renderiza a página passada como prop

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/details' component={Details} />
      </Switch>
    </Router>
  )
}

export default Routes