import React, {Component} from 'react';

import Grid from './components/grid';
import Instructions from './components/instructions';
import SweepOrFlag from './components/sweepOrFlag'

const MyContext = React.createContext('hello');

class App extends Component {
	state = {
		clickedBomb: false,
		sweepOrFlag: 'sweep'
	}



	sweep = ()=>{
		this.setState({
		  sweepOrFlag: 'sweep',
		})
	}

	flag = ()=>{
		this.setState({
		  sweepOrFlag: 'flag',
		})
	}

	//Used to end the game. ClickedBomb is used to define what game is (in return)
	endGame = () => {
		this.setState({
		  clickedBomb: true,
		});
	}

	retry = ()=>{
		this.setState({
		  clickedBomb: false,
		});
	}

	
	render(){
		var game;
		if (!this.state.clickedBomb){
			game = 
			<div>
			<MyContext.Provider value = {this.state.sweepOrFlag}>
				<SweepOrFlag sweep = {this.sweep} flag = {this.flag}/>
				<Grid endGame = {this.endGame} sweepOrFlagState = {this.state.sweepOrFlag} renderAgain = {this.state.clickedBomb}/>
			</MyContext.Provider>
			</div>
		}
		else {
			game = <div >
			<p className="text-2xl text-red-800 ">You've lost</p>
			<button className = "bg-blue-600 text-white mt-3 text-4xl rounded  p-4" onClick = {this.retry}>Try again</button>
			</div>


		}
	return (
			<div className="text-center m-8 flex flex-col">
					<Instructions/>
					{game}
			</div>
		
		);
	}
}

export default App;