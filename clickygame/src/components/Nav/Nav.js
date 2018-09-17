//set up Nav bar component 
import React from "react"
import "./Nav.css"

const NavBar = props => (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="list-group-item list-group-item-dark">
                        DBZ Clicky Game
                    </li>

                    <li id="tracker">Right: Wrong:</li>

                    <li id="score">Score:</li>

                    <li id="topScore">Top Score:</li>
                    
                    </ul>
                </div>
            </nav>
        );


export default NavBar;