import React,{component} from "react";

export class error extends component{
    render(){
        return(
            <div className="error-page">
    
    <h1>Ooops!</h1>
    <h4>An error occured</h4>
    <p>An error has occured and we're working to fix the problem!<br>
        we'll be up and running shortly.
    </p>

    <div className="btns">
        <a href="/public/index.html" class="return-btn">Return Home</a><br>
       
    </div>
    </div>
        )
    }
}