import React from 'react'
import disStyle from './Disconnected.module.css'

export default function Disconnected() {
  return (
    <>

        <div className={ ` bg-dark text-danger p-1 rounded ${disStyle.offline}`}>
            You are offline right now
        </div>
    </>
  )
}
