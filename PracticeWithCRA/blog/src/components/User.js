import React,{Component} from 'react';
export default class User extends Component
{
    constructor()
    {
        super();
        this.state = {
            // data: "anil"
            data: 0
        }
    }
    apple(){
        // alert("apple");
        // this.setState({data:"sidhu"})
        this.setState({data:this.state.data + 1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update</button>
            </div>
            
        )
    }
}