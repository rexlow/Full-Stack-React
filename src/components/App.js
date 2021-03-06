import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {

  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.initialContests
  }
  
  componentWillMount() {
    
  }

  render() {
    return(
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest => <ContestPreview key={contest.id} {...contest} /> )}
        </div>
      </div>
    )
  }
};

export default App;