import logo from './logo.svg';
import './App.css';
import Child from './Child';

function App() {
  return (
    <div className="App">
      <Child num={4}>
        {(index) => <div>the count is {index}</div>}
      </Child>
    </div>
  );
}

export default App;
