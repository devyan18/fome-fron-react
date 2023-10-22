import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TasksPage = ({ io }) => {
  // get id from url with useParams
  const { proyectId } = useParams()

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (!proyectId) return
    fetch(`http://localhost:4000/api/tasks/${proyectId}`)
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [proyectId])

  useEffect(() => {
    io.on('updating-tasks', ({ newData, proyectId: id }) => {
      if (proyectId !== id) return
      setTasks(newData)
    })

    return () => {
      io.off('updating-tasks')
    }
  })

  return (
    <div>
      <Link className="btn btn-success btn-sm"
        to={`/tasks/${proyectId}/new-task`}
      >
        create new page
      </Link>
      {JSON.stringify(tasks, null, 2)}</div>
  )
}

export default TasksPage
