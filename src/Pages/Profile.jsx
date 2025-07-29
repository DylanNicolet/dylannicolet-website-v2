import profilePicture from "../assets/images/profile.webp"
import linkdinLogo from "../assets/images/linkdin-logo.png"
import githubLogo from "../assets/images/github-logo.png"

export default function Profile() {
    return (
        <section className="profile">
            <img src={profilePicture} alt="Photo of Dylan Nicolet" className="profile__image"/>

            <div className="profile__text">
                <p>
                    <span className="decorative-p" aria-hidden="true">{"<p>"}</span>
                    Hi! Welcome to the web factory.
                    I am your friendly neighbourhood Front-End Web Developer,
                    Currently coding from the warm tropical island of Mauritius.
                    <br />
                    <br /> 
                    This website will provide you with examples of my work and <span aria-hidden="true">{"<a>"}</span><a href="https://github.com/DylanNicolet" rel="noreferrer" target="_blank">links</a><span aria-hidden="true">{"</a>"}</span> to my code hosted on GitHub.
                    <br /> 
                    <br /> 
                    So don't hesitate to visite them. Enjoy! 
                    <br />
                    <span className="decorative-p" aria-hidden="true">{"</p>"}</span>
                </p>
            </div>

            <div className="profile__logo-container">
                <a href="https://github.com/DylanNicolet" rel="noreferrer" target="_blank">
                    <img src={githubLogo} alt="Link to GitHub" className="profile__logo"/>
                </a>
                <a href="https://www.linkedin.com/in/dylan-nicolet-reactwebdeveloper/" rel="noreferrer" target="_blank">
                    <img src={linkdinLogo} alt="Link to Linkdin" className="profile__logo" style={{width: "50px"}}/>
                </a>
            </div>
        </section>
    )
}