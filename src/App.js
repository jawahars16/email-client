import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleAuthClick = this.handleAuthClick.bind(this);
	}

	handleAuthClick() {
		window.gapi.load('auth2', () => {
			if (!window.gapi.auth2.getAuthInstance()) {
				window.gapi.auth2
					.init({
						apiKey: config.apiKey,
						discoveryDocs: config.discoveryDocs,
						clientId: config.clientID,
						scope: config.scopes
					})
					.then(
						res => console.log(res),
						err => console.log(`Error : ${JSON.stringify(err)}`)
					);
			}
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={this.handleAuthClick}>Authorize</button>
			</div>
		);
	}
}

export default App;
