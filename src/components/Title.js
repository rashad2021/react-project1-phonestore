import React from 'react'
import '../App.css'

export default function Title({name,title}) {
  return (
    <div className="row">
      <div style={{textAlign:'center'}} className="col-12  text-title">
        <h1 className="font-weight-bold">
            {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  )
}

