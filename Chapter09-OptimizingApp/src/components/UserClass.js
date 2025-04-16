import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       userInfo: {
         name: "Dummy",
         location: "Default",
         avatar_url: "https://dummy-phone"

       },
     };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log( "child componentdidmount");
   const data = await fetch("https://api.github.com/users/MM-27-dev");
   const json = await data.json();

   this.setState({
    userInfo : json
   })

   console.log(json);
   
    
  }

  componentDidUpdate(){
    console.log("child componet did upadte");
    
  }

  componentWillUnmount(){
    console.log("componet will  unmount"); //removing from the UI
    
  }

  render() {
    console.log( "child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="User-comp">
        <img src={avatar_url}/>
        <h1>Name : {name}</h1>
        <h2> Address : {location}</h2>

        <h2>Contact : @monikamuniraju123 </h2>
      </div>
    );
  }
}

export default UserClass;



// Parent Constrctor
// Parent render
// child constructor
// child render
// child componentDidMount
// parent componentDidMount
// ====
// child render (with Api data)
// child componentDidUpdate