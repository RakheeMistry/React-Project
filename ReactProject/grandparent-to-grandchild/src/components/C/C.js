import D from "../D/D";
function C(props){
    return(
        <div>
            <h2>C Component</h2>
            <hr/>
            <D cdata={props.bdata}/>
        </div>
    )
}
export default C;