import {Component} from "react";

class  Erroroccured extends Component  {
    render(){
        return (
            <div className="error-page" >
    
    <h1>Ooops!</h1>
    <h4>An error occured</h4>
    <p>An error has occured and we're working to fix the problem!
        we'll be up and running shortly.
    </p>

    <div className="btns">
        <a href="/public/index.html" class="return-btn">Return Home</a>
       
    </div>
    </div>    
)
    }

}

export default Erroroccured;