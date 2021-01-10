import React, { Component } from 'react';
import axios from 'axios';

import routes from '../routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
    };
  }

  componentDidMount() {
    axios.get(routes.test()).then((res) => {
      const response = res.data;
      this.setState({ response });
    });
  }

  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        <h1>{ response.body }</h1>
      </div>
    );
  }
}

export default App;
