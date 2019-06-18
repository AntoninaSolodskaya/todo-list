import React from 'react';

const List = (item, index) => (
  <li key={index}>
    <div className="title-wrap">
      {item.title}
      <button 
        type="button"
        className="add"
        onClick={() => this.props.addInnerElem(item.id)}
      >
        +
      </button>
      <button 
        type="button"
        className="remove"
        onClick={() => this.removeElem(item.id)}
      >
        -
      </button>
    </div>
    {item.children && item.children.length > 0 && (
      <ul>{item.children.map(this.parseList)}</ul>
    )}
  </li>
)

export default List;
