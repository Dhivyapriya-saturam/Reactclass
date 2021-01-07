import React from 'react';
class App extends React.Component {
constructor(props) {
      super(props);
      this.state = {
         data: []
      }

      this.setStateHandler = this.setStateHandler.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.setNewNumber = this.setNewNumber.bind(this)
   };
   setNewNumber() {
      this.setState({data: this.state.data + 1})
   }
   setStateHandler() {
      var item = "update..."
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
   };
   forceUpdateHandler() {
      this.forceUpdate();
   };
   render() {
   return (
         <div>
            <Header/>
            <Content/>
            <Update/>
            <>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <p>State Array: {this.state.data}</p>
            </>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>HELLO</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>WELCOME TO OUR PAGE!!</h2>
         </div>
      );
   }
}
class Update extends React.Component {
    render() {
      return (
         <div>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
    }
}
export default App;