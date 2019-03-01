import React from 'react';
class Card extends React.Component{
    render(){
        return(
            <div className="col-md-3 pt-4">
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img src="https://picsum.photos/200/300/?random" alt=""/>
                    <div className="card-body">
                        <h1>{this.props.tittle || this.props.children}</h1>
                        <p>{this.props.children}</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card;
