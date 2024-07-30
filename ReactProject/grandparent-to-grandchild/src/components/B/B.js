import C from "../C/C";
function B(props){
    return(
        <div>
            <h2>B Component</h2>
            <hr/>
            <C bdata={props.adata}/>
        </div>
    )
}
export default B;