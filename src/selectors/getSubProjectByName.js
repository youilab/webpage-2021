import {projects} from '../data/projects'


export const getSubProjectByName = (name ) => {
    if (name === '') {
        return []
    }
    let subProjects =  projects.filter(project =>project.contentProject )
    
    
    let subProjectsFilter =subProjects.filter((project,i) => {
        const contentFiltered = project.contentProject.map((p) => (
            p[0].type === 'container'
        ))
        return contentFiltered[i] > 0
    } )

    const subProjectContent =  subProjectsFilter[0].contentProject.filter(subProjectsFiltered =>
        subProjectsFiltered[0].title === name  
    )
    console.log(subProjectContent[0][0])
    return subProjectContent[0][0];
}