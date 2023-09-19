import React from 'react';
import style from './form.module.css';


const NewData = ({data}) => {
    console.log(data);
  return (
    <div>
        {data.map((item, index) => {
            return (
                <div key={index} className={style.item}>
                    <p>{item.value.task}</p>
                    <p>{item.value.desc}</p>
                </div>
            )
        })}
    </div>
  )
}

export default NewData;