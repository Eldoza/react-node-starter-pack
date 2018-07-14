import React, { Component } from 'react';

import Footer from '../Footer'
import Navbar from '../Navbar'

class Main extends Component {
  state = {
    response: ''
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  //
  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //
  //   if (response.status !== 200) throw Error(body.message);
  //
  //   return body;
  // };

  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default Main;
