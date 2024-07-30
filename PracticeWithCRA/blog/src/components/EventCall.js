function EventCall() {
    function Orange() {
        alert("Function called");
    }
    return (
        <div>
            <button onClick={() => { alert("Direct Call") }}>Click Me</button>
            <button onClick={() => Orange()}>Call</button>
        </div>
    )
}
export default EventCall;