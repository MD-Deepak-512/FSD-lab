import React from 'react'

const Propexp2 = () => {
 const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      {users.map(user => (
        <UserCard 
          key={user.id}
          name={user.name}
          email={user.email}
          role={user.role}
        />
      ))}
    </div>
  );
}

function UserCard(props) {
  return (
    <div style={{ border: "0.5px solid black",color:"white",borderRadius:"20px", margin: "10px", padding: "10px",  backgroundColor:"black"}}>
      <h3>{props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>
  );
}


export default Propexp2;