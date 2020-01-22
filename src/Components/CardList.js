import React, { Component } from 'react';
import Card from './Card'

class CardList extends Component {
	render(){
		//creates a card element with data pulled from users API for each robot in the array 
		const { robots } = this.props
		const cardComponent = robots.map((user, i) => {
			return <Card 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
				 key={robots[i].id} />
		});

		return(
			<div>
				{cardComponent}
			</div>

		);
	}
}
export default CardList;