import React from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json';

class FoodBox extends React.Component {

  state = {
    quantity : 1
  }

changeHandler = (event) => {
  const {quantity, value} = event.target
  this.setState({quantity:value})
}

render () {

  return (

<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} alt="foodboximg"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
        
          <input className="input" type="number" name ={this.props.name} value={this.state.quantity} onChange = {this.changeHandler} />

        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

  )
}  
}


export default FoodBox;