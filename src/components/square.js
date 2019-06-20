import React, { Component} from 'react';

class Square extends Component {
	state = {
		howManyBombs: 0,
	}

// Does 2 things: 
// 1. Check if endGameGrid() should be called, so endGame can be called
// 2. Check the number of bombs around the area to write into the div
	eraseBomb = (e) => {
		e.preventDefault();
		if (this.props.sweepOrFlagSquareState ==='sweep' && e.target.parentElement.style.background!=='white'){

			let clickTarget = e.target;
		//checks if yesbomb is true and calls endGameGrid
			if(clickTarget.parentElement.id.split(',')[1] === 'yesbomb'){
				this.props.endGameGrid()
			}

		//totals the amount of bombs in the area to update to state, which then uses another func to set the textContent
			else {
				//total number of bombs
				let total = 0;

				//checks the number of bombs to add to total

				let clickID = clickTarget.parentElement.id.split(',')[0];
				let checkList = [];
				// console.log(clickID %2 === 1)
				// console.log(clickID ) -> >20; <379

				//middle area
				if (clickID>20 &&
				clickID <379 &&
				clickID%20 !== 19 &&
				clickID%20 !== 0 
				){
					checkList = [clickID-1, clickID-19, clickID-20, clickID-21, +clickID+1, +clickID+19, +clickID+20, +clickID+21]	
				}

				//top bar
				else if (clickID <19 &&
				clickID >0){
					checkList = [clickID-1,+clickID+1, +clickID+19, +clickID+20, +clickID+21]
				}

				//bottom bar
				else if (clickID <399 &&
				clickID >380){
					checkList = [clickID-1,+clickID+1, clickID-19, clickID-20, clickID-21]
				}

				//left bar
				else if (clickID%20===0 &&
				clickID !==0 &&
				clickID !== 380){
					checkList = [+clickID+1, clickID-19, clickID-20, +clickID+20, +clickID+21]
				}

				//right bar
				else if (clickID%20===19 &&
				clickID !==19 &&
				clickID !== 399){
					checkList = [clickID-1, clickID-20, clickID-21, +clickID+20, +clickID+19];
				}

				//4 corners
				else if (clickID ===0) {
					checkList = [+clickID+1, +clickID+21, +clickID+21];
				}
				else if (clickID ===19) {
					checkList = [clickID-1, +clickID+19, +clickID+20]
				}
				else if (clickID === 380) {
					checkList = [clickID-20, clickID-19, clickID+1]
				}
				else if (clickID === 399){
					checkList = [clickID-1, clickID-20, clickID-21]
				}
				
				const listSquare = document.getElementsByClassName('square');


				//loops through checkList to find squares and bombs
				for (let i =0; i<listSquare.length;i++){
					if (checkList.indexOf(i)!==-1){
						if (listSquare[i] != null){
							if (listSquare[i].id.split(',')[1]==='yesbomb'){
							total++
							}
						}
					}	
				}

				//async setState
				this.setState({
				  howManyBombs: total,
				},
				function() {
					clickTarget.style.backgroundColor = 'white';
					clickTarget.style.color ='green'
					clickTarget.textContent = this.state.howManyBombs;
				}
				);
				
			}	
		}

		if (this.props.sweepOrFlagSquareState ==='flag'){
			if (e.target.style.backgroundColor !== 'red' && e.target.style.backgroundColor !=='white'){
				e.target.style.backgroundColor = 'red'
			}
			
		}
	}
	
	render() {
		return (
			<div className = "text-sm shadow-inner bg-gray-500 border border-black w-12 h-12 table-cell align-middle" onClick = {this.eraseBomb}>
			</div>
			);
	}
}

export default Square;

