// Core
import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Views
import App from 'views/App'
import Maintenance from 'modules/Maintenance/MaintenanceComponent'

export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ Maintenance }/>
	</Route>
)
