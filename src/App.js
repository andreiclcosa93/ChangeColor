//combin javascript cu html
import React from 'react';
import './App.css';
//pasul 2 - adaugam functia creata la pasul 1 
import UserItem from './components/UserItem';
import './App.css';


//extends - preia informatii de la parinte
class App extends React.Component{
  constructor() {
    //super cere ajutorul lui React.Component
    super();
    this.state = {
      background: 'purple'
    };
  }

  handleBackgroundChange(event) {
    // event.target.value;
    const userBackground = event.target.value;

    this.setState({background: userBackground});
  }

  render() {

    return (
      <div className="App" style={{background: this.state.background}}>
            {/* pasul 3 - introducem ce am scris la pasul 1  */}
            <h1> Lista utilizator: </h1>
            {/* pasul 4  - am implementat numele functiei */}
            <UserItem 
              name="Cosa" 
              email="cosaandrei93@yahoo.com"
            />


            <UserItem name="Andrei" email="andrei@gmail.com"/>
            <UserItem name="Cosmin" email="cosmin@gmail.com"/>

          <input type="color" onChange={(event) => this.handleBackgroundChange(event)}/>
            
      </div>
    );
  }
}

export default App;
