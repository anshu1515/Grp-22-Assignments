import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = ()=> {

    const initialState=JSON.parse(window.localStorage.getItem('list'));

    const [input,setInput]=useState('');
    const [list,setList]=useState(initialState);
    const [editList,setEditList]=useState('');

    useEffect(()=>{
        window.localStorage.setItem('list',JSON.stringify(list))
    },[list])

  return (
      <div className="container">
      <div className="cont-wrapper">
          <div>
          <Header/>
          </div>
          <div>
              <Form 
              input={input}
              setInput={setInput}
              list={list} 
              setList={setList}    
              editList={editList}
              setEditList={setEditList}
              />
          </div>
          <div>
              <TodoList list={list} setList={setList} setEditList={setEditList} />
          </div>
      </div>
          
      </div>
  );
}

export default App;
