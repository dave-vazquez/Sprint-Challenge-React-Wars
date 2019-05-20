import React from "react";
import "./StarWars.css";
import Character from "./Character";

class CharacterList extends React.Component {
	render() {
		return (
			<div className="character-container">
				{
					this.props.starwarsChars.map(char => {
						return <Character 
							key={char.created}
							characterName={char.name} 
							birthYear={char.birth_year} 
							mass={char.mass}
							hairColor={char.hair_color}
							eyeColor={char.eye_color}
							skinColor={char.skin_color}
						/>
					})
				}
			</div>
		)
	}
}

export default CharacterList;
