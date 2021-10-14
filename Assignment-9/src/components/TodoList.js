import React from 'react';
// import Form from './Form';

const TodoList = ({list,setList,setEditList}) => {


    const editHandler= ({id})=>{
        const findTodo=list.find((item)=> item.id === id);
        setEditList(findTodo);

    }

    const deleteHandler= ({id})=>{
        setList(list.filter((item)=> item.id !== id))
    }

    // const moveUpHandler= ({id})=>{
    //     const findTodo=list.find((item)=> item.id === id)
    
    //     console.log(list.length)
    //     if(list.length > 1){
    //         
    //     // console.log(findTodo)
    //     // if(list.length)
    //     }

    // const moveDownHandler = ({id})=>{

    // }

    
    return (
        <div>
        {list.map((item)=>(
            <li className="list-item" key={item.id}>

                <input type="text" value={item.title} className="list" onChange={(e)=>e.preventDefault()} />
                {/* <div> */}
                    <button className="btn-delete" onClick={()=> deleteHandler(item)}>
                    <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="btn-edit" onClick={()=> editHandler(item)}>
                    <i className="fas fa-edit"></i>
                    </button>
                    {/* <button className="btn-up" onClick={()=> moveUpHandler(item)}>
                    <i className="fas fa-chevron-circle-up"></i>
                    </button>
                    <button className="btn-down" onClick={()=> moveDownHandler(item)}>
                    <i className="fas fa-chevron-circle-down"></i>
                    </button> */}

                {/* </div> */}
            </li>
        )

        )}
            
        </div>
    )
}

export default TodoList
