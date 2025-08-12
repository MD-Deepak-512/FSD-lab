function App()
{
    return(
    <> <Header></Header>
    {
        isAdmin?<Admin></Admin>:null
    }
</>
    );
}
let loggedIn = false;
let isAdmin = false;
function Header()
{
    return(
        <ul>
            <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        {
            loggedIn?(<li>Logout</li>):(<li>Login</li>)
        }
    </ul>
    );
}

function Admin()
{
    return (
        <h1>Admin Login</h1>
    )
}
export default Functionapp1