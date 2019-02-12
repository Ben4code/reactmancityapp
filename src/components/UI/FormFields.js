import React from 'react'




export default function formFields(props) {

  const renderTemplate = ({ formData, id, changed }) => {
    let formTemplate = null;  
    switch (formData.element) {
      case ('input'):
        formTemplate = (
          <div>
            <input {...formData.config} value={formData.value} onChange={(event)=> changed({event, id})}/>
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
