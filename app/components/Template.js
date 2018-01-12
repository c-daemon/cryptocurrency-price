import React from 'react';

const Template = (props) => {
const coinName = ["Bitcoin", "Ethereum", "Ripple", "Bitcoin Cash", "Litecoin", 	"Miota", "Dash", "Nem"]
    return (
      <ul className='coinlist'>
        {props.data.map(function (coin, index) {
        return (
          <li key={index} id={index} className='coin'>
            <h3 className='coin-name'>{coinName[index]}</h3>
            <ul className='currency'>
              <li><span>INR - &#8377; {coin.INR}</span></li>
              <li><span>USD - $ {coin.USD}</span></li>
              <li><span>EUR - &euro; {coin.EUR}</span></li>
            </ul>
          </li>
        )
      })}
      </ul>
    )
  }

export default Template;