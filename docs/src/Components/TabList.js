//TabList.js
import React, {Component} from 'react';
import Tab from './Tab'

export class TabList extends Component {
  render() {
    return (
      this.props.tabs.map((oneTab) => (
        <Tab
          tabInfo={oneTab}
          changeTab={this.props.changeTab}
          activeTabId={this.props.activeTabId}
        />
      ))
      // .map loops over the elements
    );
  }
}

export default TabList;
