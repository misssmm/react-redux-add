import React from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import {bindActionCreators} from 'redux'

class App extends React.Component{

    addnum(){
        var num=Number(this.refs.numberTxt.value)
     
        this.props.actions.addnum(num)
    }

  
    render(){
        return (
            <div>
                {this.props.v}
                <button onClick={this.props.actions.add}>+</button> {" "}
                <button onClick={this.props.actions.reduce}>-</button>

                <div>
                    <input type="text" ref="numberTxt"/>
                    <button  onClick={(this.addnum).bind(this)}>增加text中的值</button>
                </div>
            </div>
            

        );
    };
}

export default connect(
    (state)=>{
        return{
            v:state.v
        }
    },
    (dispatch)=>{
        return {
            actions :bindActionCreators(actions,dispatch)
        }
    }
)(App)