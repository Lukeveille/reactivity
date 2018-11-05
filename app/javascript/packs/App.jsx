import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var i = this.state.id;
    i > this.props.data.length - 2? i = 0 : i++;
    console.log(i)
    this.setState(() => {return {id: i}})
  }
  render() {
    return <h1 onClick={this.handleClick}>Hello {this.props.data[this.state.id].name}!</h1>
  }
}

export default App;