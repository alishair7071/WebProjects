import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from './components/ClockSlogans';
import CurrentTime from './components/CurrentTime';

function App() {

  return <div>
    <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
    </center>
  </div>
}

export default App
