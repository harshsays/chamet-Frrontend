import { Component } from "react";
import styles from "./game.module.css"
import { Instruction } from "../game instruction/instruction";
class Game extends Component{

    constructor(){
        super();
        this.state={
            instruction:false
        }
    }

    chngeToInstruction=()=>{
        this.setState({
            instruction:true
        })
    }
    render(){
        return(
            <>
            {!this.state.instruction?
            <div>
                <h1>WELCOME 🤣</h1>
                <div className={styles.fontlarge}>BEFORE MOVING AHEAD TO THE GAME Please Read the <a className={`${styles.underline} ${styles.green} cursor` } onClick={this.chngeToInstruction}>
  instructions
</a>
 carefully</div>
            </div>
            :<Instruction />
            }
            </>
        )
    }

}

export {Game}