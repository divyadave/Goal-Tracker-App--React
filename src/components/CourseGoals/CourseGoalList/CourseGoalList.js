import CourseGoalItem  from "../CourseGoalItem/ÇourseGoalItem";
import './CourseGoalList.css';

function CourseGoalList (props) {
 
    return (
        <ul className="goal-list">
            { props.items.map((goal) => {
                 return <CourseGoalItem text={goal.text} key={goal.id} id={goal.id} listDelete={props.onDelete}></CourseGoalItem>

            })}
           

        </ul>
    );
}

export default CourseGoalList;