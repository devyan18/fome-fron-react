const ProjectItem = ({ projectId, name, creator, description }) => {
  return (
    <div className="card">
      <h5 className="card-header">
        {name}        
      </h5>
      <div className="card-body">
        <h6>
          <img width={46} src={`https://mineskin.eu/avatar/${creator}`} alt={creator} />
          <span className="">@{creator}</span>
        </h6>
          {
            description?.length > 0
              ? <p className="card-text">{description}</p>
              : null
          }
        <a href={`/${projectId}`} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default ProjectItem