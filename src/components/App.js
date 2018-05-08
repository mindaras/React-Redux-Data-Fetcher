import React, { Component } from 'react';
import '../styles/App.css';
import { fetchData } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from './Select';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      id: null,
      result: 'Select a value',
      changed: false
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  changeHandler(id) {
    let selectedItem = this.props.items.find(item => item.id === id);
    this.setState({id: selectedItem.id, result: selectedItem.title, changed: true});
  }

  render() {
    return (
      <div className="App">
        <Select items={this.props.items} changeHandler={this.changeHandler} />
        <Result result={this.state.result} changed={this.state.changed} id={this.state.id} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    items: reduxState.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
