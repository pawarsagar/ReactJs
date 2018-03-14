import React from 'react'
import Subtract from './Subtract'
import Addition from './Addition'
class App extends React.Component {
  render() {
    return (
      <div>
        <div align="center" style={{ color: "Green" }}>
          <h1>Have Your Calculation Here</h1>
        </div>
        <div>

          <Subtract />
          <Addition />
        </div>
      </div>
    );
  }
}





export default App