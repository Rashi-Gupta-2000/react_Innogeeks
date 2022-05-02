import TodoItem from "../TodoItem/TodoItem";
import "./Todos.css"
import Card from "../UI/Card/Card"
const Todos=(props)=>{
    const ALL_TODOS = props.todo;
return (
    <Card className='todos1'>
      {ALL_TODOS.map((todo) =>  (
        // <TodoItem 
        //   title={todo.title}
        //   priority={todo.priority}
        //   date={todo.date}
        //   key = {todo.id}
        // />
        <div key={todo.id}>
          <TodoItem 
           title={todo.title}
           priority={todo.priority}
           date={todo.date}
           
         />
        </div>
      ))

      }

        {/* <TodoItem
        title={INITIAL_Todo[0].title}
        priority={INITIAL_Todo[0].priority}
        date={INITIAL_Todo[0].date}
      />
      <TodoItem
        title={INITIAL_Todo[1].title}
        priority={INITIAL_Todo[1].priority}
        date={INITIAL_Todo[1].date}
      />
      <TodoItem
        title={INITIAL_Todo[2].title}
        priority={INITIAL_Todo[2].priority}
        date={INITIAL_Todo[2].date}
      />
      <TodoItem
        title={INITIAL_Todo[3].title}
        priority={INITIAL_Todo[3].priority}
        date={INITIAL_Todo[3].date}
      /> */}

       </Card>
    )
}
export default Todos;