import React, { useState } from 'react';
import style from './form.module.css';

const Form = ({handleData}) => {
  const [input, setInput] = useState({
    task: '',
    desc: ''
  });

  const handleChange = (event) => {
    setInput((prev) => {
      return {...prev, [event.target.name]: event.target.value}
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleData(input);
  }


  return (
    <div>
        <form className={style.form} onSubmit={handleSubmit}>
            <input type="text"
             name="task"
             placeholder="New Task"
             value={input.task} 
             className={style.input}
             onChange={handleChange}
             
             />
             
            <br />
            <textarea 
            name="desc" 
            cols="30" 
            rows="3" 
            placeholder="Description" 
            value={input.desc} 
            className={style.textarea}
            onChange={handleChange}
            >

            </textarea>
            <br />
            <button className={style.btn}>Submit</button>
        </form>
    </div>
  )
}

export default Form;