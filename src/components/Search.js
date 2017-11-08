import React from 'react'


class Search extends React.Component {
  state = {
    input: ''
  }

  handleChange = (event) => {
    let search = event.target.value
    this.setState({input: event.target.value})
    this.props.onInput(search)
  }

  render(){
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          value={this.state.input}
          onChange={this.handleChange}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}


export default Search
