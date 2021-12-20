import * as React from 'react';
import Snowfall from 'react-snowfall';
import {useState} from 'react';
import './home.module.css';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}

 
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        
    }
    state={
        seasonGreetings:'Hej :)',
        buttonCaption:'Klikni za čestitat Božić', //Isprve sam panirala raadit nesto drugo, zato je ovdje osta ovi button caption al nema veze
        buttonState1:false,
        buttonState2:true
    };
    render() { 
        return ( <>
        <Snowfall />
            <h1>Nacionalni parkovi</h1>
            <div>
                Početna stranica
                <div className='Dodatak'>

                <button disabled={this.state.buttonState1}onClick={()=>this.setState({
                    seasonGreetings: 'Sretan Božić',
                    buttonState1:true,
                    buttonState2:false
                })}>{this.state.buttonCaption}</button>

                <button disabled={this.state.buttonState2} onClick={()=>this.setState({
                    seasonGreetings: this.state.seasonGreetings +' i sretna Nova godina!',
                    buttonState2:true
                })}>Klikni za čestitat Novu Godinu</button>

                <button disabled={!this.state.buttonState1 && this.state.buttonState2} onClick={()=>this.setState({
                    seasonGreetings: '',
                    buttonState1:false,
                    buttonState2:true
                })}>Reset</button>
                
                <p>{this.state.seasonGreetings}</p>
                </div>
            </div>
        </>  );
    }
}
 
export default Home;