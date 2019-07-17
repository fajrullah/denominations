import React, { Component } from 'react';
import InputContent from "./InputContent";
import FormContent from "./FormContent";
import { countAfterComas , denominationFraction, validationInput , formatInputValue } from "../Utils/formatFunction";
import { defaultFraction } from "../Utils/formatVariable";
class Content extends Component {
  state = {
  	rupiah : '',
    denomination : '',
  }
  onChange = (e) => {
    const val = e.target.value
    let valueInput =  0
    const isValid = validationInput(val)
    if(isValid){
          valueInput = formatInputValue(val) / defaultFraction[0]
          const seratusRibu = denominationFraction(Math.floor(valueInput),defaultFraction[0])
          let comas = valueInput % 1
          let restValue = 0, roundValue = 0 , toDecimal = 0, toString = '' , recentFraction = 0
          const filter = defaultFraction.map((k,i) => {
              recentFraction = defaultFraction[i + 1]
              restValue = comas * k
              toDecimal = countAfterComas(restValue)
              roundValue = toDecimal / recentFraction
              comas = roundValue % 1
              toString = denominationFraction(Math.floor(roundValue),recentFraction)
              return  toString
          })
          filter.unshift(seratusRibu)
          filter.pop()
          valueInput = filter.toString()
    }else{
          valueInput = 'Invalid Input'
    }
    this.setState({
     [e.target.name]: e.target.value,
     denomination : valueInput,
    });
  }
  onSubmit = (e) => {
    console.log(this.state.rupiah)
  }
render() {
	const { denomination } = this.state
 		return (
 			<FormContent onSubmit={this.onSubmit}>
 				<InputContent onChange = {this.onChange}/>
        {denomination}
 			</FormContent>
 			)
 	 }
}
export default Content;