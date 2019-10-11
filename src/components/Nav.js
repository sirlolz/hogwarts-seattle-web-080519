import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	function handleClick(props) {
		return props.filterGreased()
	}

	// function handleSort(props) {
	// 	return props.sortedName()
	// }
	

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			{props.greased === false? 
			<button onClick={() => handleClick(props)}>Show Greased</button>
			:
			<button onClick={() => handleClick(props)}>Show Ungreased</button>}
			{props.nameSorted === false?
			<button onClick={() => props.handleSort()}>Sort by name length ascending</button>
			:
			<button onClick={() => props.handleSort()}>Sort by name length descending</button>}
			
		</div>
	)
}

export default Nav
