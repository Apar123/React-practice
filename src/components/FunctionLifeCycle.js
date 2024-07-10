import React, { useEffect, useState } from 'react'

export default function FunctionLifeCycle() {
  const [name] = useState();

  useEffect(() => {
    /* This lifecycle method is called when the DOM is rendered
    also known as component mounting. Mostly used for calling API's */
  }, []);

  useEffect(() => {
    /* This lifecycle method is called when the value defined in the
    dependency changes means value of component in DOM changing also known as 
    component updating the DOM */


    return () => {
      /* This life cycle mehtod is called when something is removed from the DOM
      also known as component unmounting */
    }
  }, [name]);

  return (
    <div>
      Hello from functional based component
    </div>
  )
}
