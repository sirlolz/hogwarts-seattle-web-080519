import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsBrowser from './HogsBrowser'

class App extends Component {

  constructor() {
    super()
    this.state={
      showGreased: false,
      nameSorted: false
    }
  }

  lengthCompare(a,b){
    return a.name.length - b.name.length 
  }
   
  lengthCompareRevers(a,b){
    return b.name.length - a.name.length 
  }

  filterGreased = () => {
    this.setState(prevState => {
      return {showGreased: (!prevState.showGreased)}
    })
  }
  
  sortedName = () => {
    this.setState(prevState => {
      return {nameSorted: (!prevState.nameSorted)}
    })
  }

  sortHogName = (hogs) => {
    if (this.state.nameSorted === false){
      return hogs.sort(this.lengthCompare)
    } else {
      return hogs.sort(this.lengthCompareRevers)
    }
  }

  render() {
    return (
      <div className="App">
          < Nav 
          handleSort={this.sortedName}
          greased={this.state.showGreased} 
          filterGreased={this.filterGreased}
          nameSorted={this.nameSorted}
          />
          < HogsBrowser 
          hogs={this.sortHogName(hogs)} 
          showGreased={this.state.showGreased}/>
      </div>
    )
  }
}

export default App;
