import { useEffect, useState } from "react"
import ProjectItem from "./ProjectItem"

const ProjectList = ({io}) => {
  const [projects, setProjects] = useState([])

  const getProjects = () => {
    fetch('http://localhost:4000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }

  useEffect(() => {
    getProjects()
  }, [])

  useEffect(() => {
    io.on('new-task', (data) => {
      setProjects(data)
    })

    return () => {
      io.off('new-task')
    }
  }, [io])

  return (
    <div>
          {
            projects.map(project => {
              return (
                <ProjectItem
                  key={project._id}
                  projectId={project._id}
                  name={project.projectName}
                  creator={project.projectCreator.nickName}
                />
              )
            })
          }
        </div>
  )
}

export default ProjectList