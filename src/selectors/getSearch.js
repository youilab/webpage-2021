import {projects} from '../data/projects'


export const getSearch = (name ) => {
    console.log(name)
    if (name === '') {
        return []
    }
    name = name.toLowerCase()

    return projects.filter(project => project.title?.toLowerCase().includes(name) )
}