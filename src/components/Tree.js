import React, { Component } from 'react';

export default class Tree extends Component {

  render() {
    let getDataFromProps = parentId => {
      return this.props.data.filter(item => item.parentId === parentId)
    }
    let сurrentId = null;
    let bufer = [];
    let renderData = (сurrentId) => {
      let filtredData = getDataFromProps(сurrentId);
      filtredData.forEach(item => {
        let id = item.id;
        let itemLength = item.id.split('_').join('').length - 1;
        bufer.push(<div key={item.id} style={{marginLeft: itemLength * 10 +'px'}}>{item.title}</div>)
        renderData(id);
      });
    }
    renderData(сurrentId);
    return (
      <div>
        {bufer}
      </div>
    )
  }
};
