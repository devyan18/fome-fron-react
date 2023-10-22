import { useNavigate, useParams } from 'react-router-dom'

const NewTaskPage = ({ io }) => {
  const { projectId } = useParams()

  const navigate = useNavigate()

  const handleCreateTask = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    fetch(`http://localhost:4000/api/tasks/${projectId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        taskDescription: form.get('description').toString()
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        io.emit('updating-tasks', { projectId })
      })
      .finally(() => {
        navigate(`/tasks/${projectId}`)
      })
  }

  return (
    <form onSubmit={handleCreateTask}>
      <input type="text" name="description" />
      <button type="submit">Send</button>
    </form>
  )
}

export default NewTaskPage
