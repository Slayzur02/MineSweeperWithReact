import React, { Component} from 'react';

class SweepOrFlag extends Component {
	compSweep = ()=>{
		this.props.sweep()
	}

	compFlag = ()=>{
		this.props.flag()
	}
	render() {
		return (

			<div className="flex flex-col items-center">
			<button className = "mb-4 bg-blue-400 rounded h-12 w-16" type = "button" onClick = {this.compSweep}>Sweep</button>
			<button className = "mb-4 bg-red-400 rounded h-12 w-16" type = "button" onClick = {this.compFlag}>Flag</button>
			</div>
			);
	}
}

export default SweepOrFlag;




