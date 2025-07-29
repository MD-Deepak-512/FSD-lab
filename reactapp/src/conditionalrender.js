let isadmin = true;
const Conditionalrender = () => {
  return (
    <>
    <Header/>
    {isadmin?(<Admin/>):null}
    </>
  )
}
function Admin(){
    return(
        <>
        <h1>Admin Dashboard</h1>
        </>
    );
};
let loggedin = false;
function Header(){
    return(
        <>
        <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Contat</li>
            <li>{loggedin?(<li>Logout</li>):(<li>Login</li>)}</li>
        </ul>
        </>
    );
}

export default Conditionalrender