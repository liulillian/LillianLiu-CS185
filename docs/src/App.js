//App.js
import React, {Component} from 'react';
import './App.css'
import TabList from './Components/TabList'
import Body from './Components/Body'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTabId: 1
    }
    this.changeTab = (tabId) => {
      this.setState({
        activeTabId: tabId
      })
    } 
  }
  
  render() {
    const tabs = [
      {id: 1, title: 'Home'},
      {id: 2, title: 'Gallery'},
      {id: 3, title: 'Videos'},
      {id: 4, title: 'AboutMe'},
      {id: 5, title: 'Links'}
    ]
    return (
      <div className="body">
        <div className="nav-bar">
          <TabList
            tabs={tabs}
            changeTab={this.changeTab}
            activeTabId={this.state.activeTabId}
          />
        </div>
        <div className="main-body">
          <Body activeTabId={this.state.activeTabId}/>
        </div>
      </div>
    );
  }
}

export default App;
