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
      handleSubmit1 = event => {
        alert(`Sending a password reset link to your email at ${this.state.email}`)
        event.preventDefault()
      }
      handleSubmit2 = event => {
        alert(`Your username is ${this.state.username}
        Sending a password reset email to your email.`)
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
            
            <form>
                <div style={{ fontSize: '2em', flex: '10', padding: '5px'}}>Reset Username and Password Page</div>
            <div>
               <label>Forgot Username &nbsp; </label> 
               <input 
               type='email' 
               placeholder = 'Input Email'
               value ={this.state.email} 
               onChange={this.handleEmailChange} />
            </div>
            <button type="submit" onClick={this.handleSubmit1}>Submit</button>
            <div>
                <label>Forgot Password &nbsp;&nbsp;&nbsp;</label>
                <input 
               type='text' 
               value = {this.state.username}
               placeholder = 'Input Username'
               onChange={this.handleUsernameChange} />
            </div>
            <button type="submit" onClick={this.handleSubmit2}>Submit</button>
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
