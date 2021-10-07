import logo from './logo.svg';
import './App.css';
import CourseGoalInput from './components/CourseGoals/CourseGoalInput/CourseGoalInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import { useState } from 'react';

function App() {
  const [goalArr, setGoals] = useState([
    {text: 'Do web designing course weekly', id: 'g1'},
    {text : 'Practice coding daily', id: 'g2'}
  ])
  const onaddGoalHandler = (event) => {
    setGoals(prevGoals => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({text: event, id: Math.random().toString()})
      return updatedGoals

    })

  }
  const deleteItem = (event) => {
    setGoals(prevGoals => {
      
      const updatedGoals = prevGoals.filter((item) => item.id !== event.toString())
      console.log(updatedGoals)
      return updatedGoals;

    })
   
  }
  let content = (
  <p style={{ textAlign: 'center' }}>No Goals found. Maybe add one?</p>
  )
  if(goalArr.length > 0) {
    content = (
      <CourseGoalList items={goalArr} onDelete={deleteItem}></CourseGoalList>

    )
  }

  return (
    <div>
      <section id="goal-form">
      <CourseGoalInput onAddGoal={onaddGoalHandler}>
      </CourseGoalInput>
        </section>
        <section id="goals">  
      {content}
        </section>
      
    
    
    </div>
  );
}

export default App;
