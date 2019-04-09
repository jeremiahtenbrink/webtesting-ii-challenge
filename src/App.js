import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

class App extends Component {
    state = {
        balls:   0,
        strikes: 0,
    };
    
    handleStrike = () => {
        if ( this.state.strikes < 2 ) {
            this.setState( state => ( { strikes: state.strikes + 1 } ) );
        } else {
            this.setState( { strikes: 0, balls: 0 } );
        }
    };
    
    handleBall = () => {
        
        if ( this.state.balls > 3 ) {
            this.setState( { balls: 0, strikes: 0 } );
        }
        
        if ( this.state.strikes < 2 ) {
            this.setState( state => ( {
                strikes: state.strikes + 1,
                balls:   state.balls + 1
            } ) );
        } else {
            this.setState( state => ( { balls: state.balls + 1 } ) );
        }
    };
    
    handleHit = () => {
        this.setState( { balls: 0, strikes: 0 } );
    };
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Play Ball</h1>
                    <Display balls={ this.state.balls }
                             strikes={ this.state.strikes }/>
                    <Dashboard handleStrike={ this.handleStrike }
                               handleBall={ this.handleBall }
                               handleHit={ this.handleHit }
                    />
                </header>
            
            </div>
        );
    }
}

export default App;
