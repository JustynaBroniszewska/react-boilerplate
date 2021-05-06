import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { AddLiquidity } from './AddLiquidity'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AddLiquidity />
        </Route>
      </Switch>
    </Router>
  )
}
