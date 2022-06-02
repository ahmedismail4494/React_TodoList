import React , {Component} from "react";
import './AddItems.css';


class AddItems extends Component {

  state= {
    id:'',
    name:'',
    phone:''
  };

  
  handleChange= (e) => {
    const items = this.props.items;
    let numitems = items.length;

    this.setState({ id : numitems+1 , [e.target.id] : e.target.value, })
    
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state)
    this.setState({ id:'', name:'', phone:'' })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder='Inter Your Name....' id='name' onChange={this.handleChange} value={this.state.name} />
          <input type='number' placeholder='Inter Your Phone...' id='phone' onChange={this.handleChange} value={this.state.phone} />
          <input type='submit' value='Add' />
        </form>
      </div>
    )}
    
  }
  
  export default AddItems;

