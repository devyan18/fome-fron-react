const CreateTaskForm = ({ io }) => {
  const handleCreateTask = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    fetch('http://localhost:4000/api/tasks/652c5de946d22ce093e41aa4', {
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
        io.emit('new-task', data)
      })
  }

  return (
    <form onSubmit={handleCreateTask}>
      <input type="text" name="description" />
      <button type="submit">Send</button>
    </form>
  )
}

export default CreateTaskForm
