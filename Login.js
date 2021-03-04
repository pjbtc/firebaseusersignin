import React,{ useState } from 'react';
import Fire from './Fire';


const Login=()=>{

    const [email, setEmail] =useState("");

    const [password, setPassword] =useState("");

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        
    }
    // log the user
    Fire.auth().signInWithEmailAndPassword(email,password)
    .then((user)=>{})
    .catch((error)=>{
        console.log(error);
    })

    function Register(event){
        event.preventDefault();
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                    onChange={handleEmailChange}
                     type ="email"
                     name="email"
                     className="form-control"
                     placeholder="Email address"
                     />

                    <input 
                    onChange= {handlePasswordChange}
                     type ="password"
                     name="password"
                     className="form-control"
                     placeholder="password address"
                     />
                    </div>
                    <button type="Submit" className="btn btn-primary">SignIn</button>
                    <button onClick={Register} type="button" className="btn btn-danger"> SignUp></button>


                

            </form>

        </div>
    )
}
export default Login;