import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import NewFoods from './components/NewFoods';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {foods: foods}
  }

  addNewFood=(newFood)=>{
    this.setState({foods:[newFood, ...this.state.foods],
    formNewFood: false
  })}

  render() {
    console.log('The foods are', foods)
    return (
    <div className="App">
      <h1>IronNutrition</h1>
      <button className ="button is-primary"> Add new food </button>
      {this.state.foods.map(food => (
        <FoodBox {...food} />

      ))}
      <NewFoods addNewFood={this.addNewFood}></NewFoods>
    </div>
  );
  }
}

export default App;
