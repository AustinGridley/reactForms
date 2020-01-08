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
      handleSubmit = event => {
        alert(`Your Username is ${this.state.username} 
        Your password is ${this.state.password}`)
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
                <div style={{ fontSize: '2em', flex: '10', padding: '5px'}}>Login Page</div>
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
