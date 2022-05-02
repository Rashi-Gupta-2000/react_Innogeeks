import {useState} from "react";
import './TodoItem.css';
import TodoDate from "../TodoDate/TodoDate";
import Card from '../UI/Card/Card';
function TodoItem(props) {
    //function TodoItem({title,todoData,priority})

    const [usertitle,settitle ]=useState(props.title); //usertitle is the variable and settitle is the function that we will get
    //settitle work is to update the new value to usertitle
    const[textChange,setTextchanged] = useState(false);
    const[newPriority,setPriority]=useState(props.priority);

    // const title = "BUy books ";
    // const todoData = new Date(2022,7,19);
    // const priority="Medium";

    let title =props.title;
    const todoData = props.date;
    let priority=props.priority;
    // const month = todoData.toLocaleString('en-US',{month:'long'})
    // const year = todoData.getFullYear();
    // const day = todoData.toLocaleString('en-US',{day:'2-digit'})

    //destructuring
    //const {title,todoData,priority}=props;

    const buttonClickHandler = () =>{
        settitle("this is the new title");
        // setTextchanged(true);
        setTextchanged((abc)=> !abc);
        setPriority("High");
        console.log(usertitle);
    }

    return (
        // <div className="todo-item">
        <Card className="todo-item">
            {/* <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            </div> */}
            {/* <div>{todoData.toLocaleString()}</div> */}
            <TodoDate userDate={todoData} />
            <div className="todo-description">
                {/* <h2 >{usertitle}</h2> */}
                <h2 className={` ${textChange == true ? "color2":"color1"}`}>
                    {usertitle}
                </h2>
                <div className="todo-priority">{newPriority}</div>
                <button onClick={buttonClickHandler}>Change Text</button>
            </div>
        </Card>
    )
 }
export function NewItem(){
    return <h2>THis is new item</h2>
}
 export default TodoItem;


