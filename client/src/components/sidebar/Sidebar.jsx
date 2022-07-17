import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);

        }
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="img" src="https://dustinstout.com/wp-content/uploads/2015/06/how-to-write-a-blog-1920x1080.jpg" alt=""></img>
                <p className="postDesc">
                    The access policies of a site define which visits are allowed. Your current visit is not allowed according to those policies.
                    Only the site owner can change site access policies. The access policies of a site define which visits are allowed. Your current visit is not allowed according to those policies.
                    Only the site owner can change site access policies. The access policies of a site define which visits are allowed.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATAGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} >
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>

                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}
