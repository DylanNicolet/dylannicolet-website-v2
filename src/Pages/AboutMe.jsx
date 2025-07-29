import image from "../assets/images/about-page_image.webp"

export default function AboutMe(){
    return(
        <section className="about-me">
            <h1 className="about-me__title">About Me</h1>

            <div className="about-me__container">
                <div aria-hidden="true" className="about-me__image-container">
                    <img className="about-me__planet-image" src={image} alt="" />
                </div>
                
                <div className="about-me__text">
                    <p>After dabbling in HTML and CSS here and there throughout 2018–2019 out of pure curiosity, something sparked in me.</p>
                    <p>It was my newfound interest and amazement at the beautiful things that could be created with just a few lines of code.</p>
                    <p>So here I am, a few years later, with an OpenClassrooms diploma in Front-End Web Development and a strong will to pursue this coded dream.</p>
                    <p>Currently specializing in the JavaScript framework React and its ecosystem, I ultimately intend to expand my knowledge to the backend—and become a Full-Stack Developer one day.</p>
                </div>
            </div>
        </section>
    )
}