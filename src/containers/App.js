// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React from 'react';

import MainMenu from '../components/MainMenu';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainMenu />
        {this.props.children}
      </div>
    );
  }

}

export default App;
