import './App.css';
import Card from './components/Card'

//use intellisense vscode plugin for suggestions
function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline bg-green-400 mb-4">
      Hello world!
    </h1>
    <Card name="Adam" btnText="click me"/>
    <Card name="lorem" btnText="visit me"/>
    </>
  );
}

export default App;
