import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import CardContainer from './components/CardContainer'
import Controllers from './components/Controllers'


function App() {

  return <center>

    <div className="px-4 py-5 my-5 text-center">
      <CardContainer>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplayCounter></DisplayCounter>
         <Controllers></Controllers>
        </div>
      </CardContainer>
    </div>
    
    </center>



}

export default App
