import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);

    useEffect(()=>{
        //Api call 
    },[])
  return (
    <div className="User-comp">
        <h2>Count : {count}</h2>
      <h1>Name : {name}</h1>
      <h2> Address : Ramanagara</h2>
      <h2>Contact : @monikamuniraju123 </h2>
    </div>
  );
};

export default User;
