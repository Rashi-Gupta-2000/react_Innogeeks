import logo from './logo.svg';
import './App.css';
import Abc  ,{NewItem}from './Components/TodoItem/TodoItem';
import TodoItem from './Components/TodoItem/TodoItem';
import Todos from './Components/Todos/Todos';
import NewTodo from './Components/NewTodo/NewTodo';
import {useState} from 'react';

function App() {
  const INITIAL_Todo = [
    {
      id: 'T1',
      title:"THis is first title",
      priority:"Medium",
      date:new Date(2022,3,14)
    },
    {
      id: 'T2',
      title:"THis is second title",
      priority:"High",
      date:new Date(2022,6,7)
    },
    {
      id: 'T3',
      title:"THis is third title",
      priority:"Medium",
      date:new Date(2022,8,21)
    },
    {
      id: 'T4',
      title:"THis is fourth title",
      priority:"Low",
      date:new Date(2022,2,14)
    }
  ];
  const [allTodos,setAllTodos] = useState(INITIAL_Todo);
  const dataSaveHandler = (usertodo) => {
    console.log(usertodo);
    setAllTodos((prevData)=>{
      return [usertodo, ...prevData];
    });
  };
  return (
    <div className="App">
      {/* <Abc/>
      <Abc/>
      <Abc/>
      <Abc/> */}

      {/* <Abc title="THis is first title" priority="Medium" date="2022-03-14"/>
      <Abc title="THis is second title" priority="low" date="2021-03-14"/>
      <Abc title="THis is third title" priority="Medium" date="2022-05-14"/>
      <Abc title="THis is fourth title" priority="low" date="2022-25-14"/> */}
      
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
      {/* <NewItem/> */}

      <NewTodo onDataReceive = {dataSaveHandler}/>
      <Todos todo={allTodos}/>

    </div>
  );
}

export default App;


{/**
  1.import statements - optional
  2.function,arrow,class - return
  3.export default
   */
}