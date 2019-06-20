import React, {Component} from 'react';
import Square from './square';

class Grid extends Component {
    state = {
        listOfNumbers: []
    }
    //Calls endGame() function from App.js to end the game
    endGameGrid = ()=>{
        this.props.endGame()
    }

    componentWillMount() {
        // Generating random numbers for the bombs
        let arr = []
        while(arr.length < 300){
            var r = Math.floor(Math.random()*400);
            if(arr.indexOf(r) === -1) arr.push(r);
        } 
        this.setState({
          listOfNumbers: arr,
        });
    }


    render() {
        // Creating loop for Squares, added with number id and yes/no bomb
        let onlyArr = this.state.listOfNumbers
        const correctNumberOfSquares = [];
        var items =[]
        for (let i=0; i<400; i++){
            correctNumberOfSquares.push(i)
        }
        for (const [index] of correctNumberOfSquares.entries()) {
            if (onlyArr.indexOf(index) !== -1){
                items.push(
                        <div id= {index +',nobomb'} className ='square' key = {index}>
                            <Square endGameGrid = {this.endGameGrid} sweepOrFlagSquareState= {this.props.sweepOrFlagState}/>
                        </div>
                    )
            }
            else {
                items.push(
                        <div id= {index +',yesbomb'} className='square' key = {index}>
                            <Square endGameGrid = {this.endGameGrid} sweepOrFlagSquareState= {this.props.sweepOrFlagState}/>
                        </div>
                    )
            }
            }
        
        
    	// Returning the squares
      return (
    	<div className="text-red-800 justify-center " style = {{
display: 'grid',
gridTemplateColumns: 'repeat(20,3rem)',
gridTemplateRows: 'repeat(20, 3rem)',
	}}>
		{items}
    	</div>
    	)
    }
}

export default Grid;