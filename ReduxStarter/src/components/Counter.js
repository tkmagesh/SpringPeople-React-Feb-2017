import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions';

class Counter extends Component{
	triggerIncrement(){
		this.props.INCREMENT_ACTION(100);
	}
	render(){
		return (
			<div>
				<h3>Counter</h3>
				<input type="button" value="Increment" onClick={this.triggerIncrement.bind(this)}/>
				<div>{this.props.counter}</div>
				<input type="button" value="Decrement" onClick={this.props.DECREMENT_ACTION}/>
			</div>
		)
	}
}
function mapStateToProps(state){
	console.log('current state in counter = ', state);
	return {
		counter : state.counterReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(counterActions, dispatch);
	/*return {
		dispatchIncrement : function(){
			console.log('Increment dispatched');
			dispatch({type : 'INCREMENT'});
		},
		dispatchDecrement : function(){
			console.log(arguments);
			dispatch({type : 'DECREMENT'})
		},

	}*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);





