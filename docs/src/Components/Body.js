//Body.js
import React, {Component} from 'react';
import Home from './Home'
import Images from './Images'

export class Body extends Component {
  displayContent = () => {
    var activeTabId = this.props.activeTabId
    if (activeTabId == 1)
      return <Home/>
    else if (activeTabId == 2)
      return <Images/>
    else return <Images/>
  }
  
  render() {
    return (this.displayContent());
  }
}

export default Body;
