import { Component } from "react";
import styles from "./login.module.css";
import { Game } from "../game/game";
import { Signup } from "../signup/signup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
        signUp:false,
        email:"",
        password:"",
        message:""
    };
  }

  chngesignUP=()=>{
    this.setState({
        signUp:!this.state.signUp
    })
  }

  signInFetchApi = async (e) => {
    e.preventDefault();
    try {
      const answer = await fetch("https://mytukka.onrender.com/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      });
      
      const data = await answer.json();
      this.setState({
        message: data.message,
      });
    } catch (err) {
      console.log("err")
      console.log(err.message);
    }
  };
  
  render() {
    return (
      <>
      {this.state.message=="User signed in successfully"?<Game />:
      !this.state.signUp?
        <form id={styles.back} action="" onSubmit={this.signInFetchApi}>
          <label htmlFor="">EMAIL</label>
          <input type="text" onChange={(e)=>this.setState({email:e.target.value})} />

          <label htmlFor="">PASSWORD</label>
          <input type="password" onChange={(e)=>this.setState({password:e.target.value})}/>

          <button type="submit" className={styles.submitBtn}>SUBMIT</button>

          <p className={styles.linkText}>
            <a className={styles.pointer} href="#">Forgot Password?</a>
          </p>
          <p className={styles.linkText}>
            Don't have an account? <a className={styles.pointer} onClick={this.chngesignUP}>Sign up</a>
          </p>
          {this.state.message?<p>{this.state.message}</p>:null}
        </form>
  :<Signup  />}
      </>
    );
  }
}

export { Login };
