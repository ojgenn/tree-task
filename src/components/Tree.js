import React, { Component } from 'react';

export default class Tree extends Component {

  render() {
    let getDataFromProps = parentId => {
      return this.props.data.filter(item => item.parentId === parentId)
    }
    //let element = '';
    let startparentId = null;
    let bufer = [];
    let renderData = (startparentId) => {
      let filtredData = getDataFromProps(startparentId);
      filtredData.forEach(item => {
        let id = item.id;
        console.log(item.id.split('_').join('').length)
        let itemLength = item.id.split('_').join('').length - 1;
        bufer.push(<div key={item.id} style={{marginLeft: itemLength * 10 +'px'}}>{item.title}</div>)
        renderData(id);
      });
    }
    renderData(startparentId);
    return (
      <div>
        {bufer}
      </div>
    )
  }
};
