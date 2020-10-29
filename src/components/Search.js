import 'bulma/css/bulma.css';
import React from 'react';


class Search extends React.Component {

  state = {
    search:''
  }
  
  handleChange = (event) => {
    let value = event.target.value

    this.setState({
      search: value
    })
  }

  handleFormSubmit = (event) => {
    this.props.searchinput(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Search</label>

          <input className ='input search-bar'  type="text" value={this.state.search} name ="search" onChange={this.handleChange}></input>

        </form>
      </div>

    )
  }

}

export default Search;