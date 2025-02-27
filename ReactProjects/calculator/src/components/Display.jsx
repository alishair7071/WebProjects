
import styles from "../App.module.css"

const Display=({displayVal})=>{

    return <input classNameName={styles.display} type="text" placeholder='0000000' value={displayVal} readOnly/>
}

export default Display;