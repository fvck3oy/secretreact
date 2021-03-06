import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import boy from './pic/boy.jpg'

import PostList from './PostList'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Pumin Swangjang",
      nickname: "Boy",
      age: 22,
      posts: [
        {
          id: 1,
          name: "Pozterz",
          text: "xD"
        },
        {
          id: 2,
          name: "",
          text: "xD"
        },
        {
          id: 3,
          name: "",
          text: "Hello from Anonymous."
        },
      ]
    };

    this.state = {
      persons: []
    }


  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });

      })
  }


  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

 

  render() {
    const { posts } = this.state
    return (


      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


          <h1 className="App-title">Welcome to Profile Boy RealLife</h1>
        </header>
        <img src={boy} alt="boy" width="280" height="400" />

        <br />

        <p>
          ทดลองใช้ state <br /><br />

          สวัสครับผมชื่อ บอย :3 <br />
          Name : {this.state.name}<br />
          NickName : {this.state.nickname}<br />
          Age :  {this.state.age}

          <hr />
          <PostList posts={posts} />
        </p>


        {/* event */}<br /><br />

        ShowChangeName : {this.state.name2}<br />
        ShowComment : {this.state.comment}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
        <input type="text" name="name2" onChange={e => this.handleOnChange(e)} value={this.state.name} />
            Comment:
        <input type="text" name="comment" onChange={e => this.handleOnChange(e)} value={this.state.name} />

          </label>
          <button onClick={this.addClicked} type="submit">Add</button>
        </form>



        < br /> <br />
        <hr />
        {this.state.persons.map(person => <li>{person.userId}</li>)}

      </div>
    );
  }

}

export default App;