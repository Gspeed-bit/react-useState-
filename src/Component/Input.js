import React, {useState} from "react";


export default function Input() {
const [contactsData, setContactData] = useState([])
const [inputData, setInputData] = useState({firstName:"", lastName:""})

function handleChange(event){
const {name, value} = event.target
setInputData(previnputData =>{
return {

  ...previnputData,  [name]:value
}
})}

function handleSubmit (event){
  event.preventDefault();
  setContactData(prevContactData =>{
    return [
    
      ...prevContactData,  inputData
    ]
  })
}

console.log(inputData)
console.log(contactsData)

const contacts = contactsData.map(contact => <h1 key= {contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName} </h1>)
    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input type="text" 
            name= "firstName"
            placeholder= "First Name" 
            value= {inputData.firstName}
            onChange={handleChange}            
            /> <br />


            <input type="text" 
            name= "lastName"
            placeholder= "Last Name" 
            value= {inputData.lastName}
            onChange= {handleChange}       
            />   <br />    

            <button > Add Contact</button>
            </form>
            {contacts}
        </div>
    )
}
