import React from 'react';
import Link from 'react-router-dom';
import Template from './Template'
import getAllcoins from './api';
import Loader from './Loader';

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      coins: ""
    };
  }
  
  componentDidMount() {
    this.interval = window.setInterval(function () {
      getAllcoins()
      .then(function (data) {

        this.setState(function () {
          return {
            coins: data
          }
        });
      }.bind(this));
    }.bind(this), 5000)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  
  render() {
    let result = this.state.coins?[this.state.coins.BTC, this.state.coins.ETH, this.state.coins.XRP, this.state.coins.BCH, this.state.coins.LTC, this.state.coins.IOTA, this.state.coins.DASH, this.state.coins.XEM]:""
    return (
      <div className='home-container'>
        <h1 className='top'><span>Cyptocurrency Prices</span></h1>
        {this.state.coins?<Template data={result}/>:<Loader/>}
      </div>
    )
  }
}

export default Home;