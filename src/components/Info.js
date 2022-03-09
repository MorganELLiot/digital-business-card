import headshot from "../images/headshot.JPG"

export default function Info() {
    return (
        <div className="info item">
            <div className="crop">
                <img src={headshot} className="img" />
            </div>
            <h1 className="title">Morgan Elliot</h1>
            <h2 className="subtitle">Software Engineer</h2>
            <a href="https://a11yengineering.wixsite.com/morgan" target="blank" className="site-link">Personal Website</a>
            <div className="buttons">
                <a className="email btn" href="mailto:m.33.elliot@gmail.com" target="_blank" role="button">Email</a>
                <a className="linkedin btn" href="https://www.linkedin.com/in/m-elliot/" target="blank" role="button">LinkedIn</a>
            </div>
        </div>
    );
}