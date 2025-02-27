
const CardContainer = ({children}) => {


    return <>
        <div className="card" style={{width: "60%"}}>
            <div className="card-body">
                {children}
            </div>
        </div>
    </>
}

export default CardContainer;