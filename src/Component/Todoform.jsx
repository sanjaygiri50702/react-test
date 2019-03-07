import React, { Component } from 'react';
class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task:''
         }
    }
    handleChange(event){
        this.setState({
            task:event.target.value
        })
        console.log('ka',event.target.value)
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.task);
        this.setState({
            task:''
        })
        
    }
    render() { 
        return ( 
            <div>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.task}name="todo" id="" onChange={this.handleChange.bind(this)}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
         );
    }
}
 
export default Todoform;