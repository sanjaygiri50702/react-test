import React, { Component } from 'react';
class Faq extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
    }

    solution(){
        this.setState(state=>({
            show:state.show ? false : true
        }));
    }
    render() { 
        return ( 
            <div className="form-inline">
                <h1 className="pr-3">{this.props.tittle}</h1>
                <button className="btn btn-outline-info" onClick={this.solution.bind(this)}>+</button>
                <p>{this.state.show ? this.props.description: ""}</p>
            </div>
        );
    }
}
export default Faq;