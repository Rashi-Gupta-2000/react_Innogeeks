import Todoform from "../TodoForm/TodoForm";
import "./NewTodo.css"
const NewTodo = (props) => {
    const getFormData = (formData) => {
        console.log(formData);

    const userData = {
        ...formData,
        id: Math.random().toString(),
      };
    props.onDataReceive(userData);
    };

    return (
        <div className="new-todo">
            <Todoform onSaveClick={getFormData}/>
        </div>
    );
};
export default NewTodo;