import logo from './logo.svg';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Joe" />      
    </div>
  );
}

export default App;
