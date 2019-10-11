import React from 'react'
import HogFront from './HogFront'
import HogBack from './HogBack'

export default class HogCard extends React.Component {

    constructor() {
        super ()
        this.state={
            front: true
        }

    }

    handleCard = () => {
        this.setState( prevState => {
            return {
                front: (!prevState.front)
            }
        })
    }

    render () {
        return <div className="c">
            {this.state.front? 
            <HogFront 
            handleCard={this.handleCard} 
            name={this.props.name} 
            imgURL={this.props.imgURL}/>
            :
            <HogBack 
            handleCard={this.handleCard}
            greased={this.props.greased} 
            medal={this.props["highest medal achieved"]}
            specialty={this.props.specialty}
            weight={this.props.weight}/>}
        </div>
    }
}