import { Component } from 'react';
import { Login } from './components/login/login';
import './App.css'


class App extends Component{
  constructor(){
    super();
    this.state={
      login:false
    }
  }

  // JUST TO MAKE THE LOGIN BUTTON CLICKABLE
  chngeLogin=()=>{
    if(this.state.login==true){
      return;
    }
    this.setState({
      login:!this.state.login
    })
  }
// git add .
// git commit -m "your message"
// git push origin main

  render(){
    return (
      <>
      <div className='App-container'>
      <header id="header" className='display-flex'>
        <div className="font-center , width-10 heigth-50per font-center">CLICK-27</div> 
        {!this.state.login?<button className="font-center , bold , width-10 bg-green heigth-100per btn-default" onClick={this.chngeLogin}>LOGIN</button>:null}  
      </header>
      <main id='body' className='font-center'>
        <div className='login-block'>
          {!this.state.login?<h1>Play the GAME! And win lot of prizes</h1>:null}
        {this.state.login?<Login />:null}
        </div>
      </main>
      </div>
      </>
    )
  }
}

export {App}