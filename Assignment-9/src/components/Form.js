import React,{useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input,setInput,list,setList,editList,setEditList}) => {

    const updateList=(title,id)=>{
        const newTodo=list.map((item)=>
            item.id === id ? {title,id} : item
    )
        setList(newTodo);
        setEditList('');
    }
    useEffect(()=>{
        if(editList){
            setInput(editList.title)
        }
        else{
            setInput('');
        }
    },[setInput,editList])

    const onInpChgeHandler= (event)=>{
        setInput(event.target.value);
    }
    const onFormHandler = (e)=>{
        e.preventDefault();
        if(!editList){
            setList([...list, {id:uuidv4(), title:input}])
            setInput('');
        }
        else{
            updateList(input,editList.id)
        }
        
    };
    return (
        <form onSubmit={onFormHandler}>
            <input 
             type="text"
             className="input-item" 
             id="item" 
             placeholder="Enter a todo.." 
             value={input} 
             required
             onChange={onInpChgeHandler}/>
            <button className="btn-add" type="submit">
                {editList ? "OK" : "ADD"}
            </button>
        </form>
    )
}

export default Form;
