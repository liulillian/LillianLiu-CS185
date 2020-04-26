//Tab.js
import React, {Component} from 'react';

export class Tab extends Component {
  addStyling = () => {
    if (this.props.tabInfo.id == this.props.activeTabId) {
      return {backgroundColor: 'gray'}
    } else {
      return {backgroundColor: 'white'}
    }
  }
  render() {
    return (
      <div
        className='tab'
        style={this.addStyling()}
        onClick={this.props.changeTab.bind(this, this.props.tabInfo.id)}
      >
        <h2>{this.props.tabInfo.title}</h2>
      </div>
    );
  }
}

export default Tab;
