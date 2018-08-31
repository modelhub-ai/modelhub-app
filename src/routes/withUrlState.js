/*
 * Note that "history" refers to our history business object,
 * not browser history.
 *
 * This provides:
 * urlHistoryId: as read from url path
 * isDiffing: as from queryString
 * diffReleaseId: diffed history id as from queryString
 * 
 */
import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  LANDING_PATH,
  EXAMPLE,
  OVERVIEW,
  MODEL_QS,
  PORT_QS,
} from './constants'
import hoistStatics from 'hoist-non-react-statics'

const extractUrlState = ({ location, match, routerHistory }) => {
  // 'model' corresponds to the identifier in App.js
  const modelId = match.params.modelId || null
  const qs = new window.URLSearchParams(location.search)
  const qsModel = qs.get(MODEL_QS)
  const qsPort = qs.get(PORT_QS)

  const browseTo = str => routerHistory.push(str)
  const goHome = () => browseTo(LANDING_PATH)
  const goToExample = () => browseTo(`/${modelId}/${EXAMPLE}`)
  const goToTab = (tabId) => browseTo(`/${modelId}/${tabId}`)
  const goToModelHome = (modelId) => browseTo(`/${modelId}/${OVERVIEW}`)

  return {
    modelId,
    qsModel,
    qsPort,
    goHome,
    goToModelHome,
    goToExample,
    goToTab
  }
}

/**
 * A public higher-order component to access the imperative API
 */
const withUrlState = Component => {
  const C = props => {
    return (
      <Route
        // Just for clarity. (I have a var called history..)
        children={({ history: routerHistory, ...restRouterProps }) => (
          <Component
            {...extractUrlState({ routerHistory, ...restRouterProps })}
            {...props}
          />
        )}
      />
    )
  }

  C.displayName = `withUrlState(${Component.displayName || Component.name})`
  C.WrappedComponent = Component
  C.propTypes = {
    wrappedComponentRef: PropTypes.func
  }

  return hoistStatics(C, Component)
}

export default withUrlState
