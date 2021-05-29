import {projects} from '../data/projects'

export const getProjectByName = (name ) => {
    if (name === '') {
        return []
    }
    name = name.toLowerCase()
    return projects.find(project => project.url.toLowerCase().includes(name) )
}