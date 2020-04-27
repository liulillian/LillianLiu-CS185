//Body.js
import React, {Component} from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Videos from './Videos';

export class Body extends Component {
  displayContent = () => {
    var activeTabId = this.props.activeTabId
    if (activeTabId == 1) return <Home/>
    else if (activeTabId == 2) return <Gallery/>
    else if (activeTabId == 3) return <Videos/>
    else return <Home/>
  }
  
  render() {
    return (this.displayContent());
  }
}

export default Body;
