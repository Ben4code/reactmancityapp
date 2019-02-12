import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import FormFields from "../../UI/FormFields";
import {validate} from '../../UI/misc'


export default class Enroll extends Component {

  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ''
      }
    }
  }

  submitForm = () =>{

  }
  updateForm = (element) => {
    
    const newFormData = {...this.state.formData}
    const newElement = {...newFormData[element.id]}
    newElement.value = element.event.target.value;

    let validData = validate(newElement)
    
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    console.log(validData)
    newFormData[element.id] = newElement


    this.setState({ formData: newFormData})


  }

  render() {
    return (
      <Fade >
        <div className="enroll_wrapper">
          <form onSubmit={(e)=> this.submitForm(e)}>
            <div className="enroll_title">
              Enter your email
            </div>
            <div className="enroll_input">
              <FormFields
              id="email"
              formData={this.state.formData.email}
              changed={(element) => this.updateForm(element)}
              />
            </div>
          </form>
        </div>
      </Fade>
    
 ) 
  }
}