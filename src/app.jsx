import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import Home from './components/Home';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* <CarouselContainer /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
};
export default App;
