// Views
import App from 'views/App/App'
import Header from 'modules/Header/HeaderContainer'
import Footer from 'modules/Footer/FooterContainer'
import Groups from 'views/Groups/Groups'
import Login from 'views/Login/Login'
import Profile from 'views/Profile/Profile'
import Signup from 'views/Signup/Signup'

// Core
import { checkAuth } from 'core/utils'

const isLoggedIn = (nextState, replace) => {
  if (checkAuth()) replace({ pathname: '/' })
}

const requireAuth = (nextState, replace) => {
  if (!checkAuth()) replace({ pathname: '/login', state: { nextPathname: nextState.location.pathname } })
}

const paths = {
  app: {
    path: '/',
    component: App,
    index: {
      label: 'Groups',
      components: { main: Groups, header: Header, footer: Footer, onEnter: requireAuth }
    },
    children: [
      { components: { main: Login }, label: 'Login', path: 'login', onEnter: isLoggedIn },
      { components: { main: Profile, header: Header, footer: Footer }, label: 'Profile', path: 'profile', onEnter: requireAuth },
      { components: { main: Signup }, label: 'Signup', path: 'signup' }
    ]
  }
}

export default paths
