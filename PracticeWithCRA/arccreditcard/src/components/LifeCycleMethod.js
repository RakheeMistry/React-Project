import React, {Component} from "react";

class LifeCycleMethod extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello world",
        }
        console.log("Hello from Constructor Component");
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps called");
        return null;
    }
    componentDidMount(){
        console.log("ComponentDidMount called");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called");
        return null;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
    componentDidCatch(error, info){
        console.log("componentDidCatch called");
    }
    render(){
        console.log("Render called");
        return(
            <div>
                <h1>Component Life Cycle Methods Tutorial</h1>
                <p>{this.state.message}</p>
                <button onClick={()=>this.setState({message:"Button Clicked"})}>Update Message</button>
            </div>
        )
    }
}

export default LifeCycleMethod;