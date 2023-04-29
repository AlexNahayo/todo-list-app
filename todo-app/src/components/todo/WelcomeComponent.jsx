import React, {Component} from "react";
import {Link } from 'react-router-dom'
import HelloWordService from "../../api/todo/HelloWordService";


class WelcomeComponent extends Component {

  constructor(props){
    super(props)
    this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this)
    this.state =  {
      welcomeMessage : '',
      errorMessage: ''
    }
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    this.handleError = this.handleError.bind(this)

  }
    render(){
      return (
        <>
          <h1>Welcome!</h1>
          <div className="container">

          <div className="container">
              {this.state.errorMessage}
          </div>

          Welcome  {this.props.name}. 
          You can manage your todos <Link to="/todos">here</Link>
          </div>
          
          <div className="container">
          Click here to get a customized Welcome Message 
            <button onClick={this.retreiveWelcomeMessage} className="btn btn-success" >Get Welcome Message</button>
          </div>

          <div className="container">
              {this.state.welcomeMessage}
          </div>
        </>
      )
    }
    
    retreiveWelcomeMessage() {
      // HelloWordService.executeHelloWordService()
      // .then(response => this.handleSuccessfulResponse(response))

      // HelloWordService.executeHelloWordBeanService()
      // .then(response => this.handleSuccessfulResponse(response))

      HelloWordService.executeHelloWordPathVariableService(this.props.params.name)
      .then(response => this.handleSuccessfulResponse(response))
      .catch(error => this.handleError(error))
    }

    //entire method to handle a succesful response.
    handleSuccessfulResponse(response) {
      console.log(response)
      this.setState({welcomeMessage: response.data.message})
    }


    //entire method to handle a succesful response.
    handleError(error) {
     let errorMessage = '';

     if(error.message)
        errorMessage += error.message

     if(error.response && error.response.data){
        errorMessage += error.response.data.message
     }     
     this.setState({errorMessage: errorMessage})
     
    }

  }

export default WelcomeComponent