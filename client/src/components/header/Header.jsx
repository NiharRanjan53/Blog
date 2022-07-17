import "./header.css"

export default function Header() {

    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesm"></span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
                alt="">

            </img>
        </div>
    )
}

