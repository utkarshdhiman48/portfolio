import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Assets/styles/App.css';
import Terminal from './Components/Terminal';
import Home from './Components/views/Home';
import Projects from './Components/views/Projects';
import Blogs from './Components/views/Blogs';
import NavBar from './Components/NavBar';
// import Modal from './Components/common/Modal';


export default class App extends Component {
	state={
		showTerminal: false
	}

	toggleTerminal = (e, sta) =>{
		const {showTerminal} = this.state;
		this.setState({showTerminal: sta || !showTerminal});
	}

	render(){

		const {showTerminal} = this.state;

		return (
			<BrowserRouter>
				<Route path="*" render={(props)=><NavBar toggleTerminal={this.toggleTerminal} {...props} />} />
				{showTerminal && 
					<>
						<Route path="*" render={(props)=><Terminal toggleTerminal={this.toggleTerminal} {...props} />} />
						<div className="close-terminal-btn m-halfr p-halfr fade-appear-01 b-1r pointer" onClick={this.toggleTerminal}>&times;</div>
					</>}
				<Switch>
					<Route path="/projects" exact component={Projects} />
					<Route path="/blogs" exact component={Blogs} />
					<Route path="/" exact component={Home} />
				</Switch>
			</BrowserRouter>
		);
	}
}