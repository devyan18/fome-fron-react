const Task = ({ description, done }) => {
  return (
    <li>
      <h3>{description}</h3>
      {
        done
          ? <p><b>Done</b></p>
          : null
      }
    </li>
  )
}

export default Task