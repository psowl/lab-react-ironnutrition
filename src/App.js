import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import NewFoods from './components/NewFoods';
import Search from './components/Search';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      search: ""
      // formNewFood: false,
    
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  showFormAddFood = () => {
		this.setState({
			formNewFood: true
		})
  }
  
  addNewFood=(newFood)=>{
    this.setState({
    foods:[newFood, ...this.state.foods],
    formNewFood: false
  })}

  render() {
    let search =this.state.search;
    let foods = this.state.foods

    if (search) {
      foods = foods.filter(food => food.name.includes(search))
    }

    console.log('The foods are', foods)

    return (
    <div className="App">
      <h1>IronNutrition</h1>
      <button className ="button is-primary" onClick={(e) => this.showFormAddFood(e)}> Add new food </button>
      
      {this.state.formNewFood && 
      <NewFoods addNewFood={this.addNewFood}></NewFoods>
      }

      <input type="text" value={this.state.search} name ="search" onChange={this.handleChange}></input>

      {/* <Search searchinput={this.filteredFoods} /> */}

      {foods.map(food => (
        <FoodBox {...food} />

      ))}
    </div>
  );
  }
}

export default App;
