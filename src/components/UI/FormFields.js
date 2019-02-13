import React from 'react'




export default function formFields(props) {


  const showError = () => {
    let errorMessage = <div className="error_label">
                        {
                          props.formData.validation && !props.formData.valid ?
                            props.formData.validationMessage
                          : null
                        }
                      </div>
    return errorMessage;
  }


  const renderTemplate = ({ formData, id, changed }) => {
    let formTemplate = null;  
    switch (formData.element) {
      case ('input'):
        formTemplate = (
          <div>
            <input {...formData.config} value={formData.value} onChange={(event)=> changed({event, id})}/>
            {showError()}
          </div>
        )
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  }


  return (
    <div>
      {renderTemplate(props)}
    </div>
  )
}
