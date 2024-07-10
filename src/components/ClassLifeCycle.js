import React from 'react';

export default class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      gender: '',
    }
  }

  componentDidMount() {
    /* This lifecycle method is called first time after the content is rendered in 
    DOM also know as mounting of component. It is mostly used for calling API's */
  }

  componentDidUpdate(prevProps, prevState) {
    /* This lifecycle method is called when we update something in the DOM */


    if (prevProps.data !== this.props.data) {
      /* It will run when the value of data inside the props
      is not same as previous value means component has updated */
    }

    if (prevState.name !== this.state.name) {
      /* Example for state */
    }
  }

  componentWillUnmount() {
    /* This lifecycle method is called when we remove the component from the DOM */
  }


  render() {
    return (
      <div>
        Hello from class based component
      </div>
    )
  }
}