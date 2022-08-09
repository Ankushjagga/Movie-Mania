import './App.css';

import {Route,Routes} from "react-router-dom"
import Trending from './pages/Trending';
import Home from './pages/Home';
import Topmovies from './pages/Topmovies';
import Popular from './pages/popular';
import Action from './pages/Action';
import Comedy from './pages/Comedy';
import Horror from './pages/Horror';
import Romantic from './pages/Romantic';
import Documentary from './pages/Documentary';
function App() {
  return (
    <div className="App">
 
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Trendingmovies" element={<Trending/>}/>
      <Route exact path="/Topmovies" element={<Topmovies/>}/>
      <Route exact path="/Popularmovies" element={<Popular/>}/>
      <Route exact path="/action" element={<Action/>}/>
      <Route exact path="/comedy" element={<Comedy/>}/>
      <Route exact path="/horror" element={<Horror/>}/>
      <Route exact path="/romance" element={<Romantic/>}/>
      <Route exact path="/documentary" element={<Documentary/>}/>
 
    </Routes>

    
    </div>
  );
}

export default App;
