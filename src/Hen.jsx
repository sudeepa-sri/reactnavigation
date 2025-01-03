/*import Egg from './Egg.jsx';
function Hen({name}){
    return(
        <>
        <h1>Hen </h1>
        <Egg name={name}/>
        </>
    )
}
export default Hen; */

import Egg from './Egg.jsx';
function Hen(props){
    return(
        <>
        <h1>Hen </h1>
        <Egg name1={props.name}/>
        </>
    )
}
export default Hen;

//props drill
// we can use two methods to pass the argument
//when we passing the argument directly use {} with the variable name and use the name directly
//another methods without curly braces that stores the value in variable and access as props.name
//context that can be accesed by all

/*import Egg from './Egg.jsx';

function Hen(props){
    return(
        <>
        <h1>Hen </h1>
        
        </nameContext.Provider>
    )
}
export default Hen; */