//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"


// include your styles into the webpack bundle
import "../styles/index.css";





function SimpleCounter(props){
    return (<div className="BigCounter">
       
        <div className="Calendar">
        <i className="far fa-clock"></i>
        </div>
        <div className="Six">{props.digitOne %10}</div>
        <div className="five">{props.digitOne %10}</div>
        <div className="Four">{props.digitOne %10}</div>
        <div className="Three">{props.digitTwo %10}</div>
        <div className="Two">{props.digitThree %10}</div>
        <div className="One">{props.digitFour %10}</div>
        
        
        
        
    </div>);
}
SimpleCounter.propTypes={
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter= 0;
setInterval(function(){
	const One = Math.floor(counter/1000);
	const Two = Math.floor(counter/100);
	const Three = Math.floor(counter/10);
	const Four = Math.floor(counter/1);
	console.log(One,Two,Three,Four);
	
    
         //render your react application
         counter++;
          ReactDOM.render(
          <SimpleCounter digitOne={One}digitTwo={Two}digitThree={Three}digitFour={Four}
          />,
           document.querySelector("#app")
           );

},1000);

