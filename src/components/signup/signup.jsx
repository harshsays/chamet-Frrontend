import { Component } from "react";
import styles from "./signup.module.css";
import { Login } from "../login/login";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
        Login:false,
        name:"",
        email:"",
        password:"",
        message:""
    };
  }

  chngeLogin=()=>{
    this.setState({
        Login:!this.state.Login
    })
  }

  signUpFetchApi=async(e)=>{
    console.log("hello")
    e.preventDefault();
    console.log("clicked")
    try{
      const answer=await fetch("https://mytukka.onrender.com/api/user/signup",{
        method:"POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }),
      })
      const data=await answer.json();
      console.log(data.message)
      this.setState({
        message:data.message
      })
    }catch(err){
      console.log(err.message);
    }
  }
  render() {
    return (
      <>
      {this.state.message=="User is successfully registered"?<Login />:
      !this.state.Login?
     
        <form id={styles.signupBox} onSubmit={this.signUpFetchApi} action="">
          <label htmlFor="name">NAME</label>
          <input type="text" id="name" placeholder="Enter your name" onChange={(e) => this.setState({ name: e.target.value })}/>
                                                                     

          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" placeholder="Enter your email" onChange={(e) => this.setState({ email: e.target.value })}/>

          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" placeholder="Enter password" onChange={(e) => this.setState({ password: e.target.value })}/>

          <button type="submit" className={styles.submitBtn} >SIGN UP</button>

          <p className={styles.linkText}>
            Already have an account? <a className={styles.pointer} onClick={this.chngeLogin}>Login</a>
          </p>
          <p>{this.state.message}</p>
        </form>
        
        
  :<Login />}
      
      </>
    );
  }
}

export { Signup };
