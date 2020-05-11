import React from "react";
import contacts from "../contacts";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        phone={contacts[0].phone}
        email={contacts[0].email}
        imgURL={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        phone={contacts[1].phone}
        email={contacts[1].email}
        imgURL={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        phone={contacts[2].phone}
        email={contacts[2].email}
        imgURL={contacts[2].imgURL}
      />
    </>
  );
}

export default App;
