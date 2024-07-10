import React from 'react'
import { MyContext } from '../App'

export default function Context() {
  return (
    <div>
      <MyContext.Consumer>
        {
          (data) => (
            <div>
              {`Hello My Name is ${data.name} and i live in ${data.place}`}
            </div>
          )
        }
      </MyContext.Consumer>
    </div>
  )
}
