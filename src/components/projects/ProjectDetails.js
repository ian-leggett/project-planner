import React from 'react'

const ProjectDetails = (props) => {
  const { id } = props.match.params
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="content">
        <span className="card-title">
          Project title {id}
        </span>
          <p>Lorum ipsum</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the net ninja</div>
          <div>2nd sept</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
