import React from "react";
import "./StarWars.css";

class Character extends React.Component {
	render() {
		return (
			<div className="character">
				<div className="character-header-container">
						<h1 className="character-header">{this.props.characterName}</h1>
				</div>
				<div className="character-stat-list">
					<p className="character-stat">
						<span>Birth Year:</span>
						<span>{this.props.birthYear}</span>
					</p>
					<p className="character-stat">
					<span>Mass:</span>
						<span>{this.props.mass}</span>
					</p>
					<p className="character-stat">
						<span>Hair Color:</span>
						<span>{this.props.hairColor}</span>
					</p>
					<p className="character-stat">
						<span>Eye Color:</span>
						<span>{this.props.eyeColor}</span>
					</p>
					<p className="character-stat">
						<span>Skin Color:</span>
						<span>{this.props.skinColor}</span>
					</p>
				</div>
			</div>
		)
	}
}

export default Character;