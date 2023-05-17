import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // function setState(event) {
  //   const {value, name} = event.target;
  //   setContact((previous) => {
  //     if(name === "fName") {
  //       return {
  //         fName: value,
  //         lName: previous.lName,
  //         email: previous.email
  //       }
  //     }else if(name === "lName") {
  //       return {
  //         fName: previous.fName,
  //         lName: value,
  //         email: previous.email
  //       }
  //     }else if(name === "email") {
  //       return {
  //         fName: previous.fName,
  //         lName: previous.lName,
  //         email: value
  //       }
  //     }
  //   } );
  // }

  function setState(event) {
    const { value, name } = event.target;
    setContact((previous) => {
      return { ...previous, [name]: value };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={setState}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={setState}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={setState}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
