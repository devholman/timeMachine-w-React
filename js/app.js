// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
    var AppView = React.createClass({
    	render: function(){
    		return(
    			<div className="container">
    				<TimeMachine/>
    			</div>
    		)
    	}
    })

    var TimeMachine = React.createClass({
    	
    	getInitialState: function(){

    		return{
    			changeTime: false,
    			year: 2016,
    		}
    	},

    	_increaseYear: function(){
    		if(!this.state.changeTime){
    			var increaseFunc = function(){
    				  this.setState({
    					year: this.state.year + 1,
    					changeTime:true,
                        
    				  })

    			}
    			var boundIncrease = increaseFunc.bind(this)
    			this.intervalId = setInterval(boundIncrease,500)
    		}else{
    			clearInterval(this.intervalId) 
    				this.setState({
    					changeTime:false
    				})
    			}
    	},

    	_decreaseYear: function(){
    		if(!this.state.changeTime){
    			var decreaseFunc = function(){
    				  this.setState({
    					year: this.state.year - 1,
    					changeTime:true,
    				  })

    			}
    			var boundDecrease = decreaseFunc.bind(this)
    			this.intervalId = setInterval(boundDecrease,500)
    		}else{
    			clearInterval(this.intervalId) 
    				this.setState({
    					changeTime:false
    				})
    			}
    	},

        // _background: function(year){
        //     if(this.state.year > 1989 && this.state.year < 2000){
        //         background:<p><a href="http://giphy.com/gifs/90s-fresh-prince-of-bel-air-dj-jazzy-jeff-xT9DPnNfbVkqAKq1os">via GIPHY</a></p>
        //     }
        // },

    	render: function(){
    		return(
                <div>
    			     <div className="timer">
    				    <h3>{this.state.year}</h3>
    				    <button onClick={this._increaseYear}>Into The Future</button>
    				    <button onClick={this._decreaseYear}>Into The Past</button>
    			     </div>
                    <div>
                        <img className="earth-img"src={"images/earth.jpg"}/>
                    </div>
                </div>

    		)
    	}
    })

    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
