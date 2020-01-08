import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: ''
        }
        this.state = {
            password: ''
        }
        this.state = {
            email: ''
        }
        this.state = {
            age: ''
       }
       this.state = {
           gender: ''
       }
    }
    handleUsernameChange = (event) => {
      this.setState({
          username: event.target.value
      })  
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })  
      }
      handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })  
      }
      handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })  
      }
      handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })  
      }
      handleSubmit = event => {
        alert(`Your Username is ${this.state.username} 
        Your Password is ${this.state.password} 
        Your Email is ${this.state.email} 
        Your Age is ${this.state.age} 
        Your Gender is ${this.state.gender}`)
        event.preventDefault()
      }
      /* handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })  
      }
    */
    
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <div style={{ fontSize: '2em', flex: '10', padding: '5px'}}>Create Login Page</div>
            <div>
               <label>Username &nbsp; </label> 
               <input 
               type='text' 
               placeholder = 'Username'
               value ={this.state.username} 
               onChange={this.handleUsernameChange} />
            </div>
            <div>
                <label>Password &nbsp;&nbsp;&nbsp;</label>
                <input 
               type='password' 
               value = {this.state.password}
               placeholder = 'Password'
               onChange={this.handlePasswordChange} />
            </div>
            <div>
                <label>Email &nbsp;&nbsp;&nbsp;</label>
                <input 
               type='email' 
               value = {this.state.email}
               placeholder = '@yahooooooooo.com'
               onChange={this.handleEmailChange} />
            </div>
            <div>
                <label>Age &nbsp;&nbsp;&nbsp;</label>
                <input 
               type='number' 
               value = {this.state.age}
               placeholder = '38'
               onChange={this.handleAgeChange} />
            </div>
            <div>
                <label>Gender &nbsp;&nbsp;&nbsp;</label>
                <input 
               type='text' 
               value = {this.state.gender}
               placeholder = 'What are you?'
               onChange={this.handleGenderChange} />
            </div>
            <button type="submit">Submit</button>
           {/* <div>
                <label>Type </label>
                <select value={this.state.topic} 
                onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>

            </div>
           */}
            </form>
        )
    }
}

export default Form
