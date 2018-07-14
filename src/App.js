import React, { Component } from 'react';
import './App.css';
import Tree from './components/Tree'

class App extends Component {
  render() {
    const data = [
      {
        id: '1',
        title: 'Элемент 1',
        parentId: null,
      },
      {
        id: '2',
        title: 'Элемент 2',
        parentId: null,
      },
      {
        id: '1_1',
        title: 'Элемент 1 1',
        parentId: '1',
      },
      {
        id: '1_2',
        title: 'Элемент 1 2',
        parentId: '1',
      },
      {
        id: '1_1_1',
        title: 'Элемент 1 1 1',
        parentId: '1_1',
      },
    ];

    return (
      <div>
       <Tree data={data}/>
      </div>
    );
  }
}

export default App;
