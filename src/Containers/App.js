import logo from '../logo.svg';
import '../App.css';
import AppBar from '../Components/AddBar';
import TodoList from './TodoList';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: ['tache 1', 'tache 2', 'tache 3'],
    }

  }

  componentWillMount() {

  }

  handleCallback(text) {
    // console.log('text', text);
    let tab = this.state.list;
    // console.log('tab',tab);
    tab.push(text);
    // console.log('tab-push', tab);
    this.setState({ list: tab }, () => {
      // console.log('state list', this.state.list);
    })

  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="text-white">Todo list</h1>
        {<TodoList list={this.state.list} />}
        <AppBar callback={this.handleCallback.bind(this)} />
      </div>
    );
  }

}

export default App;
