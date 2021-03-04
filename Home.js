import React from 'react';

const Home=()=>{

    function logout(){
    	Fire.auth().signOut();

    }
    return(
        <div>
            <h1>Welcome to profile page</h1>
            <button type="submit" onClick={logout} className="btn-btn-danger">Logout</button>
        </div>
    )
}
export default Home;