
import "./about.css"

export default function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about-section">
                <p>Our aim is provide a platform where anyone can read awesome bloges and post their own blogs.</p>
                <p>You can read and write blogs on different topics like Travel, science, Books, Movies, Social Issues  etc.</p>
            </div>
            <h2 className="h2">Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img className="aboutimg" src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?w=360" alt="Jane" />
                        <div className="container">
                            <h2>Nihar Ranjan</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>niharranjanrout53@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="aboutimg"  src="https://cf.ltkcdn.net/mens-fashion/images/std/231575-800x534r1-man_in_smart_casual_jacket.jpg" alt="" />
                        <div className="container">
                            <h2>Sangram Roy</h2>
                            <p className="title">Head Of Technical</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>sangram@gmail..com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img className="aboutimg" src="https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ybWFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="John" />
                        <div className="container">
                            <h2>Rajesh Behera</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>rajesh@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    )
}