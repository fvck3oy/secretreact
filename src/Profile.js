import React, { Component } from 'react';
import logo from './logo.svg';
import boy from './pic/boy.jpg'
import './App.css';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state= {
            name:"Pumin Swangjang",
            nickname:"Boy",
            age:22,

        };


      }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Profile Boy RealLife</h1>
        </header>
        <img src={boy} width="280" height="400" />
       
        <br/>

        <p>

          สวัสครับผมชื่อ บอย :3 <br/>
         Name : {this.state.name}<br/>
         NickName : {this.state.nickname}<br/>
         Age :  {this.state.age}

        </p>
      </div>
    );
  }
}

export default Profile;