import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

function Navbar() {

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <div>
            <li style={{ float: 'right' }}>
                <Link to={'/login'}>Login</Link>
            </li>
            <li style={{ float: 'right' }}>
                <Link to={'/sign-up'}>Sign Up</Link>
            </li>
        </div>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right'}}>
                Signed in as {currentUser.username}
            </li>
        )
    }

    return (
        <nav>
            <ul>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navbar