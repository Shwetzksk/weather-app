import React from 'react';
import { connect } from 'react-redux';
import {changeToCelsiusAction,changeToFahrenheitAction } from '../redux/weather/weather.action';
function TempConvertor(props) {

  const {changeToCelsius,changeToFahrenheit } = props;
    return (
        <div className="flex justify-between text-sm w-20 ml-auto">
          <div className="w-8 h-8  grid place-items-center text-fifth rounded-full font-bold bg-tempc cursor-pointer" onClick={changeToCelsius}>&deg;C</div>
          <div className="w-8 h-8  grid place-items-center text-primary rounded-full font-bold bg-tempf cursor-pointer" onClick={changeToFahrenheit}>&deg;F</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  changeToCelsius: () => dispatch(changeToCelsiusAction()),
  changeToFahrenheit: ()=> dispatch(changeToFahrenheitAction()),
});
export default connect(null, mapDispatchToProps)(TempConvertor)
