import React, { useState } from 'react';

// const Form = () => {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");


    
//     const changeName = (e) => {
//         setName(e.target.value);
//     }

//     const changeEmail = (e) => {
//         setEmail(e.target.value);
//     }

//     const changePassword = (e) => {
//         setPassword(e.target.value);
//     }

//     const handleForm = (e) => {
//         e.preventDefault();
        
//         const userInfo = {
//             name,
//             email,
//             password
//         }

//         console.log(userInfo);
//     }

//   return (
//     <div className="mt-5">
//         <form action="" onSubmit={handleForm}>
//             <div className="form-group">
//                 <input type="text" name="name" value={name} onChange={changeName}/>
//             </div>

//             <div className="form-group">
//                 <input type="email" name="email" value={email} onChange={changeEmail}/>
//             </div>

//             <div className="form-group">
//                 <input type="password" name="password" value={password}onChange={changePassword}/>
//             </div>

//             <div className="form-group">
//                 <button className="btn btn-dark" type="submit">Submit</button>
//             </div>
//         </form>
//     </div>
//   )
// }



const Form = () => {

    const [user, setUser] = useState({name: '', email: '', password: ''})


    
    // const changeName = (e) => {
    //     setUser({name: e.target.value, email: user.email, password: user.password});
    // }

    // const changeEmail = (e) => {
    //     setUser( {name: user.name, email: e.target.value, password: user.password});
    // }

    // const changePassword = (e) => {
    //     setUser({name: user.name, email: user.email, password: e.target.value});
    // }

    const handleChange = (e) => {
        // const fieldName = e.target.name;

        // if (fieldName === 'name') {
        //     setUser({name: e.target.value, email: user.email, password: user.password})
        // }

        // else if (fieldName === 'email') {
        //     setUser({name: user.name, email: e.target.value, password: user.password})
        // }
        // if (fieldName === 'password') {
        //     setUser({name: user.name, email: user.email, password: e.target.value})
        // }

        // easy way
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleForm = (e) => {
        e.preventDefault();
        
        console.log(user);
    }

  return (
    <div className="mt-5">
        <form action="" onSubmit={handleForm}>
            <div className="form-group">
                <input type="text" name="name" value={user.name} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <input type="email" name="email" value={user.email} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <input type="password" name="password" value={user.password} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <button className="btn btn-dark" type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form;