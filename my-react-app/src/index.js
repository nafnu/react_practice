import React from 'react';
import ReactDOM from 'react-dom';

import bulma from 

function NameLength(props){
    return<h1>The name {props.name} contains {props.name.length} characters!</h1>;
}

function App(){
    return(
        <div>
            <NameLength name = "Erika" />
            <NameLength name = "George" />
            <NameLength name = "Phillip" />
        </div>
    );
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>Es hora de dormir</h1>,
  document.getElementById('other')
);


