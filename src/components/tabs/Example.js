import React from 'react'
import { withUrlState } from '../../routes'

// Just to show
const Example = ({ modelId, qsModel, qsPort, goHome, goToDemo }) => (
  <div onClick={goHome}>
    <p>model id: {modelId}</p>
    <p>qsModel: {qsModel}</p>
    <p>Click me to go home</p>
  </div>
)

export default withUrlState(Example)
