import './App.css';
import Form from './Components/Form';
import Heading from './Components/Heading';

function App() {

  return (
    <div className="App">
      <div style={{width: "50em", paddingTop: "2em", paddingBottom: "0em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Heading title="3rd SEMESTER REGISTRATION" color={[242, 215, 255]}></Heading>
      </div>
      <div style={{width: "50em", paddingBottom: "0em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Form color={[242, 215, 255]}></Form>
      </div>
    </div>
  );
}

export default App;
