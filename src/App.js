import logo from './logo.svg';
import './App.css';
import Author from './Author.js';
import User from './User.js';
import Tut_10_jsx from  './Tut_10_jsx.js';
import Tut_10_nojsx from './Tut_10_nojsx';

function App() {
  // component inside component  or nested component
  function Apple() {
    return (
      <p>This is apple component</p>
    )
  }
  return (
    <div className="App">
      <h1>hello this is pradeep's first react app</h1>
      <Author />
      <User />
      <Apple/>
      <Tut_10_jsx />
      <Tut_10_nojsx />
      {/* we can call a nested componnent in one other way */}
      {Apple()} 

    </div>
  );
  
  
}


export default App;
