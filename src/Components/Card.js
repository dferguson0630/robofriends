import React, { Component } from 'react';

class Card extends Component {

	render(){
		//destructure props passed in from CardList
		const { name, email, id } = this.props;

		return(
			//tachyons styles for card design
			//unique robot images fetched from robohash/unique-character(s)?heightxwidth

			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img src={`https://robohash.org/${id}?size=200x200`}
				 alt='robots' />

				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>

			</div>
		);
	}
}

export default Card;