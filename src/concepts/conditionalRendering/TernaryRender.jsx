const TernaryRender=()=>{

    let value=false
    let per=90
    let theme="light"
    return(
        <div>
            {value? <h1>Hello</h1>:<h1>Bye</h1> }

            {(per>70)?<p>A Grade</p>:(per>50 && per<70)? <p>B Grade</p>:<p>Fail</p> }

            <h1 style={theme==="dark"?{backgroundColor:"red"}:{backgroundColor:"blue"}}>Sundari</h1>
            
            <div className={`box ${theme==="dark"?"dark":"light"}`}></div>
        </div>
    )
}
export default TernaryRender