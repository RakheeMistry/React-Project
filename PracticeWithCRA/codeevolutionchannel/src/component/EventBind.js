import React, {Component} from 'react';

class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message:"Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye!"
    //     })
    //     console.log(this);
    // }

    click = () => {
        this.setState({
            message:"Goodbye!"
        }) 
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* // Binding in vendor */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* // Binding with fat-arrow function */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* // Binding with Class constructor */}
                {/* <button onClick={this.clickHandler}>Constructor Binding</button> */}
                {/* // Binding with class property as arrow function */}
                <button onClick={this.click}>Fat-Arrow</button>
            </div>
        )
    }
}

export default EventBind;