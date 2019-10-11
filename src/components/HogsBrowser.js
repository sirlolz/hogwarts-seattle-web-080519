import React from 'react'
import HogCard from './HogCard.js'
export default class HogsBroswer extends React.Component {

    

    renderHog () {
        return this.props.hogs.map( (hog, index) => (
            <div className="serparetThisShit">
                {this.props.showGreased === hog.greased ? (
                    < HogCard key={index} {...hog}/>
                ):(null)}
            </div>)
        );
    }

    render () {
        return (<div>
            {this.renderHog()}
        </div>);
    }

}