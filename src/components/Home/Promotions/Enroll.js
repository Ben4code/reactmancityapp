import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import FormFields from "../../UI/FormFields";
import {validate} from '../../UI/misc'
import {firebasePromotions} from '../../../firebase';

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

  resetFormSuccess = (type) => {
    const newFormData = {...this.state.formData}
    for( let key in this.state.formData){
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formData: newFormData,
      formSuccess: type ? "Thank you for subscribing." : "Email is already on the database."
    })
    this.clearSuccessMessage()
  }

  clearSuccessMessage = () => {
    setTimeout(()=>{
      this.setState({
        formSuccess: ""
      })
    }, 3000)
  }

  submitForm = (event) =>{
    event.preventDefault();
    let dataToSubmit = [];
    let formIsValid = true;
    
    //for-in-loop:Loop through an object props/
    //for-of-loop: Loops through an array.
    for(let key in this.state.formData){
      dataToSubmit[key] = this.state.formData[key].value
      formIsValid = this.state.formData[key].valid && formIsValid
    }

    if(formIsValid){
     
      firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value')
      .then(snapShot => {
        snapShot.val()
        if(snapShot.val() === null){
          firebasePromotions.push(dataToSubmit)
          this.resetFormSuccess(true);
        }else{
          this.resetFormSuccess(false);  
        }
      })
    }else{
      this.setState({
        formError: true
      })
    }
    
  }



  updateForm = (element) => {
    const newFormData = {...this.state.formData}
    const newElement = {...newFormData[element.id]}
    newElement.value = element.event.target.value;
    let validData = validate(newElement)
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    
    newFormData[element.id] = newElement
    this.setState({ 
      formError: false,
      formData: newFormData
    })
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
              {this.state.formError ? <div className="error_label">Error, check your email.</div> : null}
              <div className="success_label"> {this.state.formSuccess}</div>
              <button onClick={(event)=> this.submitForm(event)}>Enrol</button>
              <div className="enroll_discl">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum pariatur aut culpa animi, tempore delectus repellendus veritatis sed? Unde ut magni quibusdam, dolore nihil non voluptatibus esse. Iste, ducimus reprehenderit!  </p>
              </div>
            </div>
          </form>
        </div>
      </Fade>
    
 ) 
  }
}