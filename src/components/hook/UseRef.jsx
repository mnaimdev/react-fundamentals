import React, { useRef } from 'react';

const UseRef = () => {

    const userNameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = userNameRef.current.value;
        let email = emailRef.current.value;
        let password = passwordRef.current.value;

        console.log(user, email, password);
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='mt-5'>
            
            <div className='w-50 my-3 m-auto'>
                <input type="text" placeholder="Name" className='form-control' ref={userNameRef}/>
                
            </div>

            
            <div className='w-50 my-3 m-auto'>
                <input type="email" placeholder="Email" className='form-control' ref={emailRef}/>
                
            </div>
            
            <div className='w-50 my-3 m-auto'>
                <input type="password" placeholder="Password" className='form-control' ref={passwordRef}/>
                
            </div>

            <div className='w-50 my-3 m-auto'>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </>
  )
}

export default UseRef;