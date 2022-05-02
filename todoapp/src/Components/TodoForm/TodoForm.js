import "./TodoForm.css";
import { useState } from "react";
const Todoform = (props) => {
    var utc= new Date().toJSON().slice(0,10);
    const [title, setTitle] = useState("MY title");
    const [todoDate, setTodoDate] = useState(utc);
    const [priority, setPriority] = useState("");

    
    // const [userInput, setInput]= useState({
    //     title: "",
    //     todoDate: "",
    //     priority: "",
    // });

    const titleChangeHandler = (event) => {
        // setInput((prevState)=> {
        //     return { ...prevState,title: event.target.value};
        // });
        
        setTitle(event.target.value);
        //console.log(event.target.value);

        // setInput({
        //     ...userInput,
        //     title: event.target.value,
            
        // })
    }


    const dateChangeHandler = (event) => {
        setTodoDate(event.target.value);
        //console.log(event.target.value);
        // setInput({
        //     ...userInput,
        //     todoDate: event.target.value,
            
        // })
    }

    const priorityChangeHandler = (event)=> {
        setPriority(event.target.value);
        //console.log(event.target.value);
        // setInput({
        //     ...userInput,
        //     priority: event.target.value,
            
        // })
    }

    const submitHandler = (event) => {
         event.preventDefault();
         const userData = {
             title: title,
             date: new Date(todoDate),
             priority: priority,
         };
         console.log("Title:",title, "Date:", todoDate, "Priority:",priority);
        // console.log(
        //     "Title:", userInput.title , "Date:", userInput.todoDate , "Priority:", userInput.priority
        // );

        //this below will execute when we will click on addtodo
        props.onSaveClick(userData);
        setTitle("My title");
        setTodoDate("");
        setPriority("");
    }   

    return (
        <form onSubmit={submitHandler}>
            <div className="todo-controls">
                <div className="todo-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" 
                     onChange={titleChangeHandler}
                     value={title}/>
                </div>
                <div className="todo-control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date"
                    onChange={dateChangeHandler}
                    value={todoDate} />
                </div>
                <div className="todo-control">
                <label htmlFor="priority">Priority</label>
                    <select onChange={priorityChangeHandler} value={priority}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>
            <div className="todo-actions">
                <button type="submit" className="btn">Add Todo</button>
            </div>
        </form>
    );
};
export default Todoform;