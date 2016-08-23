// Core
import React from 'react'

// Views
import App from '../views/App'
import Maintenance from '../modules/Maintenance/MaintenanceComponent'

export const routes = (store) => ({
  path: '/',
  component: App,
  indexRoute: { onEnter: (nexState, replace) => replace('/welcome') },
  childRoutes: [
    { path: 'welcome', component: Maintenance }
  ]
})

export default routes
