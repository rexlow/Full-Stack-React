import React from 'react';

import Header from './Header';

class App extends React.Component {

  state = {
    pageHeader: 'Naming Contest'
  }

  componentDidMount() {
    console.log('Hello')
  }

  render() {
    return(
      <div className="App">
        <Header message={this.state.pageHeader} />
      </div>
    )
  }
};

export default App;