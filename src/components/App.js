import Count from './count'
import Form from './formvalid'
import Formsubmit from './formsubmit'
import Random from './Random'
import MyApp from './renderInput'
import MyUsers from './didmount';
import KeyCode from './KeyCode';
import Controller from './updateCompound';
import MagicEightBall from './Render';

function App() {
  return (
    <div className="App">
      <h1>Hello world &#128640;</h1>
      <Count />
      <Form />
      <Formsubmit />
      <Random />
      <MyApp />
      <MyUsers />
      <KeyCode />
      <Controller />
      <MagicEightBall />
    </div>
  );
}

export default App;
