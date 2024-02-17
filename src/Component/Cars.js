import React from "react";


 export const Header = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
       
     );
}
 export const Paragraph = () => {
    return (  
        <div className="bg_color">
             <div className="container">
            <div className="row">
                <div className="col-5 custom_css">
                <h1>Custrom Jumbotron</h1>
            <p>Using a series of utlities,you can create this jumbotron,just like the one the pervious versions of bootstrap.Cheek out the examples for how you can remix and restyle it to your liking.
                <button className="btn btn-primary">Example Button</button>
            </p>
                </div>
                
            </div>
          
        </div>
        
        </div>
       
    );
}
 


 