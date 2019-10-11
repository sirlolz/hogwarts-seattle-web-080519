import React from 'react';

export default class HogBack extends React.Component {

    handleClick = () => {
        this.props.handleCard()
    }

    render (){
        return (
        <div className="b" onClick={this.handleClick}>
            <p>{this.props.greased}</p>
            <p>{this.props.specialty}</p>
            <p>{this.props.weight}</p>
            <p>{this.props.medal}</p>
        </div>)
    }
}