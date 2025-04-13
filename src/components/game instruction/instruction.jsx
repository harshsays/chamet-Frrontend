import { Component } from "react";
import styles from "./Instruction.module.css";

class Instruction extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>How to Play Click27</h1>
        <ul className={styles.list}>
          <li>Pick any numbers between 0 to 27.</li>
          <li>
            Use letters to auto-select:
            <ul className={styles.subList}>
              <li><b>S</b>: Numbers from 0 to 13</li>
              <li><b>B</b>: Numbers from 14 to 27</li>
              <li><b>E</b>: All even numbers</li>
              <li><b>O</b>: All odd numbers</li>
            </ul>
          </li>
          <li>
            You can combine selections. For example:
            <ul className={styles.subList}>
              <li><b>S + E</b>: Even numbers from 0 to 13</li>
              <li><b>B + O</b>: Odd numbers from 14 to 27</li>
            </ul>
          </li>
          <li>Select your numbers or shortcuts and hit play!</li>
        </ul>
        <button className={styles.btn}><h4>START</h4></button>
      </div>
    );
  }
}

export { Instruction };
