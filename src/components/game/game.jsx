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
                <h1>BEFORE MOVING AHEAD TO THE GAME Please Read the <a className={styles.underline} onClick={this.chngeToInstruction}  >instructions</a> carefully</h1>
            </div>
            :<Instruction />
            }
            </>
        )
    }

}

export {Game}