
import styles from "./App.module.css"
import Display from "./components/Display"
import ButtonsContainer from "./components/ButtonsContainer"
import { useState } from "react"

function App() {


  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === 'C') {
      setCalVal("")
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
    }
  }

  return <div classNameName={styles.body}>
    <div classNameName={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>


    </div>
  </div>

}

export default App
