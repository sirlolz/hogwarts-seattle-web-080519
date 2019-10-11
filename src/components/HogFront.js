import React from 'react'

export default class HogFront extends React.Component {
    
    handleClick = () => {
        this.props.handleCard()
    }

    render () {
        // console.log(this.props)

        return (
        <div className="f">
            <p>{this.props.name}</p>
            <img onClick={this.handleClick}src={window.location.origin + this.props.imgURL} alt="cant display"></img><br/>
        </div>
        );
    }
}