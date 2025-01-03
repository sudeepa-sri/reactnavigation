function Dog(props){
    let a =10;
    a=props.value+a;

    return(
        <div>
       
       <h1> {props.name} is {a}</h1>
       <h1>lists</h1>
       <ol>
          <li>Fruits
             <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Mango</li>
             </ul>
             </li>
          <li>Vegetables
              <ol type='I'>
              <li>Potato</li>
                <li>Brinjal</li>
                <li>Chilly</li>
                
              </ol>
            </li>
          <li>Birds
          <ul className='custom-list'>
                <li>Crow</li>
                <li>Owl</li>
                <li>Hen</li>
             </ul>
            </li>

       </ol>
       <style>
        {`
          .custom-list {
            list-style: none;
          } 
          .custom-list li::before {
            content: "#";
             
          }
        `}
      </style>
       </div>
       
    )
}
export default Dog