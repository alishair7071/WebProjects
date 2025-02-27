
import styles from "../App.module.css"

const buttonsContainer= ({onButtonClick})=>{


    let buttons= ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.' ];

    return    <div classNameName={styles.buttonsContainer}>

        {buttons.map((currentBtn)=>{
            return <button
             classNameName={styles.buttons}
              onClick={()=>{
                onButtonClick(currentBtn);
              }}>
                {currentBtn}</button>
        })}
  </div>
}

export default buttonsContainer;