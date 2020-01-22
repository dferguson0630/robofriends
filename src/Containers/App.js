import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import 'tachyons';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			robots: [],
			searchfield: ''
		}
	}


	//fetch call for robot users
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users => this.setState({robots: users}))
	}


	//uses arrow function instead of bind to properly point this to the constructor
	//sets searchfield state to SearchBox input
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});

		
	}

	render(){
		const { robots, searchfield } = this.state
		//filters robots array to display only matches to SearchBox input
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;