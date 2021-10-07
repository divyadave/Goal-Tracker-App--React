import Button from '../../UI/Button/Button';
import { useState } from 'react';
import styles from './CourseGoalInput.module.css';
/* import styled from 'styled-components';

const FormControl = styled.div`
    
margin: 0.5rem 0;


& label {
font-weight: bold;
display: block;
margin-bottom: 0.5rem;
color: ${props => props.invalid ? 'red': 'black'};
}

& input {
display: block;
width: 100%;
border: 1px solid ${props => props.invalid ? 'red': '#ccc'};
background: ${props => props.invalid ? '#ffd7d7': 'transparent'};
font: inherit;
line-height: 1.5rem;
padding: 0 0.25rem;
}

& input:focus {
outline: none;
background: #fad0ec;
border-color: #8b005d;
}

`; */
function CourseGoalInput (props) {
  
    const [enteredValue, setValue] = useState('')
    const [isValid, setValid] = useState(true)
    const enteredTextHandler = (event) => {
        setValue(event.target.value);
        setValid(true)
    }
    const addSubmitHandler = (event) => {
        event.preventDefault();
        if(enteredValue.trim().length === 0) {
            setValid(false);

        }
        else {
            props.onAddGoal(enteredValue)
            setValue('')
    

        }
      
    }
    return (
        <div>
            <form onSubmit={addSubmitHandler}>
                <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} >
                <label>Course Goal</label>
                <input type="text" value={enteredValue} onChange={enteredTextHandler}></input>
                </div>
                <Button type="submit">Add Goal</Button>
            </form>
        </div>
    );
}

export default CourseGoalInput;