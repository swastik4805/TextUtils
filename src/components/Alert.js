import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.message}</strong>{props.alert.type}
    </div>
  )
}

export default Alert
