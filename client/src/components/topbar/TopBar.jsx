import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./topbar.css";



export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            <div className="topLeft">
            <a href="https://www.facebook.com/" target="_blank">
               <i  className="topIcon fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">
            <i className="topIcon fa-brands fa-instagram-square"></i>
            </a>
                
              
                <a href="https://twitter.com/niharranjan53" target="_blank">
                    <i className="topIcon fa-brands fa-twitter-square"></i>
                </a>

                <i className="topIcon fa-brands fa-pinterest-square"></i>

            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write" >WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {

                    user ? (
                        <Link to="/settings">
                            <img className="topImg"
                                src={PF + user.profilepic}
                                alt="">
                            </img>

                        </Link>


                    ) : (
                        <>
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link className="link" to="/login">
                                        LOGIN
                                    </Link>

                                </li>
                                <li className="topListItem">
                                    <Link className="link" to="/register">
                                        REGISTER
                                    </Link>

                                </li>
                            </ul>


                        </>
                    )
                }

                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
