
import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="center">
            <h1>Welcome to foods<br />kitchen</h1>
             
            <Link to="/Menu">go to menu</Link>
       </div>
        )
}
export default Home;