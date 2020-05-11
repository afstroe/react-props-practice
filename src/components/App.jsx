import React from "react";
import contacts from "../contacts";
import Avatar from "./avatar";
import Detail from "./detail";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Detail what={props.phone} />
          <Detail what={props.email} />
        </div>
      </div>
    </div>
  );
}

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
      imgURL={contact.imgURL}
    />
  );
}

function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://picsum.photos/200" />

      {contacts.map(createCard)}

      {/* <Card
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
      /> */}
    </>
  );
}

export default App;
