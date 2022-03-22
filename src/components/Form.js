import React from "react"

export default function form({setInputText,todos,setTodos,inputText,setStatus}){
    //here I can write javascript code and function
    //using hooks to handle text
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault(); //default click garda refresh bhayera browser
        setTodos([...todos,{text: inputText, completed:false, id:Math.random()*1000}]) 
        setInputText(""); //submit garisakesi aafai hatdaina, manually empty string banako
    };

    const statusHandler = (e) =>{
        console.log(e.target.value)
        setStatus(e.target.value)
    }
    return(
        //yesle aba form banayo
        <form>
            {/* hook le change garxa, change implement yeta hunxa */}
            <input placeholder="Add a Task" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler}name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
    </form>
    )
}