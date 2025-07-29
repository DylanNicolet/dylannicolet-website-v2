import FeaturedCard from "../components/FeaturedCard"
import database from "../featuredProjects"

export default function FeaturedProjects(){
    let featureCards = database.featuredProjectsData.map((project, index) => {
        return(
            <FeaturedCard 
                key={index} 
                imageSource={project.imageSource}
                backgroundColor={project.backgroundColor}
                title={project.title}
                origin={project.origin}
                description={project.description} 
                techUsed={project.techUsed}
                github={project.github}
                live={project.live}
            />
        )
    })

    return(
        <section className="featured-projects">
            <h1 className="featured-projects__title">Featured projects</h1>
            <p className="featured-projects__text">(Hover for GitHub & live links)</p>
            <div className="featured-projects__card-container">
                {featureCards}
            </div>
        </section>
    )
}