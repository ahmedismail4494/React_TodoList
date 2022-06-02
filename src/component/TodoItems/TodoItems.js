import React from "react";
import './TodoItems.css';


const TodoItems = (props) => {


  const {items , DeletItem} = props;
  let Length = items.length;
  const ListItems = Length? (items.map(item => {
    return(
      <div key={item.id} className="row">
        <span className="id">{item.id}</span>
        <span className='name'>{item.name}</span>
        <span className='phone'>{item.phone}</span>
        <span className='action' onClick={ () => DeletItem(item.id) } > &times; </span>
      </div>
      )})
    ):( <p> there is no items to show </p> ) ;


    return (
      <div className='TodoItems' >

        <div className="row">
          <span className='id title'>Id</span>
          <span className='name title'>Nmae</span>
          <span className='phone title'>Phone</span>
          <span className='action title'>Action</span>
        </div>
        {ListItems }
      </div>
    );
  }

  export default TodoItems;
