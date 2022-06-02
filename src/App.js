import React , {Component} from "react";

import TodoItems from "./component/TodoItems/TodoItems";
import AddItems from "./component/AddItems/AddItems";

class App extends Component {

  state={
    items : [
      {id:1,name:'Mohamed', phone:'01013651230'},
      {id:2,name:'Ayman',   phone:'01013651231'},
      {id:3,name:'Huda',    phone:'01013651232'}
    ]
  }

  DeletItem= (id) => {
  /* the first way to delelt item

    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items:items})

  */

  // the second way to delet item  
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) => {
    let items = this.state.items;
    items.push(item);
    this.setState({items : items})
  }


  render(){
    return (
      <div className="App container">
        
        <h1 className="todo_head" > Contact Manager </h1> 
        <TodoItems items={this.state.items} DeletItem={this.DeletItem} />
        <AddItems items={this.state.items}  addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
