import React from 'react';
import ReactToPrint from 'react-to-print';

class PrintComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, this is the printable content!</h1>
        <p>This is just a simple example to demonstrate printing in React.</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Print Example</h1>
        <ReactToPrint
          trigger={() => <button>Print Content</button>}
          content={() => this.componentRef}
        />
        <PrintComponent ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default App;