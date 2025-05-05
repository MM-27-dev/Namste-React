import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

import { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constrctor");
  }


  componentDidMount() {
    console.log("parent componentdidmount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Us Page</h1>
        <div>
          Logged In User : 
          <UserContext.Consumer>
            {
              // (data) => console.log(data)
              ({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>
              
            }
          </UserContext.Consumer>
        </div>
        {/* <User name={"Monika"} /> */}
        <UserClass name={"First child"} location={"Ramanagara"} />
        
      </div>
    );
  }
}
