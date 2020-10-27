import React from 'react';
import 'bulma/css/bulma.css';

class NewFoods extends React.Component {

  state = {
    name:'',
    calories:'', 
    image:''

  }

  handleChange (event) {

    let {name, value} = event.target;
    this.setState ({[name]: value})
  }

  handleFormSubmit=(event)=> {
    event.preventDefault();
    this.props.addNewFood(this.state);
    this.setState({
      name: '',
      calories:'', 
      image:''
    })
  }

render () {
  return (
    <div className ="block mt-4">
      <form onSubmit = {this.handleFormSubmit}>
        <div>
          <label class = "label" >Name :</label>
          <div class ="control" >
          <input className = "input is-normal" type="text" name = "name" value ={this.state.name} onChange = {(event) => this.handleChange(event)}></input>
          </div>

          <label class = "label" >Calories :</label>
          <div class ="control" >
          <input className = "input is-normal" type="number" name = "calories" value ={this.state.calories} onChange = {(event) => this.handleChange(event)}></input>
          </div>

          <label class = "label" >Image :</label>
          <div class ="control" >
          <input className = "input is-normal" type="text" name = "image" value ={this.state.image} onChange = {(event) => this.handleChange(event)}></input>
          </div>
          
          <button className ="button is-info">Submit</button>
        </div>
        
      </form>
    </div>
  )
}
}

export default NewFoods;