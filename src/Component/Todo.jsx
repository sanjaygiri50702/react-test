import React,{ Component } from 'react';
import Todoform from './Todoform';
class Todo extends Component{
    constructor(props){
    super(props);
        this.state = {
            Todo:[]
        }
    }
    addTodo(todo){
        // console.log('event',event);
        let Todo = this.state.Todo;
        Todo.push(todo);
		this.setState({
			Todo
        })
        // console.log('event',this.target.value);
        
    }
    
    removeData(data){
        var index = this.state.Todo.indexOf(data);
        var Todo = this.state.Todo.filter(data=> this.state.Todo.indexOf(data)!=index);
        console.log('hah',Todo);
        this.setState({
            Todo
        })



    }
    showData(){
        return this.state.Todo.map(data=>{
            return <React.Fragment>
                    <li>{data}</li>
                    <button onClick={()=>{this.removeData(data)}}>remove</button>
                    </React.Fragment>
        })
    }
    render(){
        return(
            <div>
                <Todoform onSubmit={this.addTodo.bind(this)}/>
                <ul>
                    {this.showData()}
                </ul>
                
            </div>
        )
    }
}
export default Todo;