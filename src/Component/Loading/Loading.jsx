import React from 'react'
import loadStyle from './Loading.module.css'

export default function Loading() {
  return (
    <>
 <div className={`${loadStyle.spinner}`}>
  <div className={`${loadStyle.bounce1}`} />
  <div className={`${loadStyle.bounce2}`} />
  <div className={`${loadStyle.bounce3}`} />
</div>

    </>
  )
}
