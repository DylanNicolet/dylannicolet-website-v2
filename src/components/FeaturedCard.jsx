import React from "react";

export default function FeaturedCard(props){
    // States
    const [previewState, setPreviewState] = React.useState("inactive"); // "active", "closing", "inactive"

    let techUsed = props.techUsed.map((tech, index) => {
        return(
            <img key={index} src={`/Images/tech-icon/${tech}-logo.webp`} alt={`${tech} logo`} className="featured-card__tech" />
        )
    })

    function activatePreview() {
        setPreviewState("active");
    }

    function deactivatePreview() {
        setPreviewState("closing");

        setTimeout(() => {
            setPreviewState("inactive");
        }, 300); // match CSS animation duration
    }

    function handleMouseLeave() {
        if (previewState === "active") {
            deactivatePreview();
        }
    }

    return(
        <article className="featured-card">
            <div className="featured-card__modal">
                { (props.title !== "Component library") && // Don't generate live preview for component library
                    <>
                        <button  aria-label={`Open a mini preview of ${props.title} project`} className="button-primary featured-card__button" onClick={activatePreview}>Mini preview</button>
                        <div
                            className={`featured-card__preview ${previewState === "active" ? "previewActive" : previewState === "closing" ? "previewClosing" : ""}`}
                            onMouseLeave={handleMouseLeave}
                            role="dialog"
                            aria-modal="true"
                            aria-label={`Mini preview of ${props.title} project`}
                        >
                            <div className="featured-card__preview-container">
                                <button onClick={deactivatePreview} className="button__close-preview" aria-label="Close preview">+</button>
                                <iframe src={props.live} title="Live preview of the website"></iframe>
                            </div>
                        </div>
                    </>
                }
                <a href={props.live} className="button-primary featured-card__external-link" target="_blank" rel="noreferrer">Live website</a>
                <a href={props.github} className="button-primary featured-card__external-link" target="_blank" rel="noreferrer">GitHub Code </a>
            </div>

            <img src={props.imageSource} alt={`Thumbnail preview of ${props.title} website`} className="featured-card__image"/>
            <h2 className="featured-card__title">{props.title}</h2>
            <p className="featured-card__origin">{props.origin}</p>
            <p className="featured-card__description">{props.description}</p>
            <div className="featured-card__tech-container">
                {techUsed}
            </div>
        </article>
    )
}