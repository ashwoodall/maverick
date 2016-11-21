// Views
import App from 'views/App/App'
import Header from 'modules/Header'
import Footer from 'modules/Footer/FooterContainer'
import People from 'views/People'
import Person from 'views/Person'
import Messages from 'views/Messages'
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
      label: 'People',
      components: { main: People, header: Header, footer: Footer },
      onEnter: requireAuth
    },
    children: [
      { components: { main: People, header: Header, footer: Footer }, label: 'People', path: 'people', onEnter: requireAuth },
      { components: { main: Messages, header: Header, footer: Footer }, label: 'Messages', path: 'messages', onEnter: requireAuth },
      { components: { main: Profile, header: Header, footer: Footer }, label: 'Profile', path: 'profile', onEnter: requireAuth },
      { components: { main: Person, header: Header, footer: Footer }, label: 'Person', path: 'person/:userId', onEnter: requireAuth },
      { components: { main: Login }, label: 'Login', path: 'login', onEnter: isLoggedIn },
      { components: { main: Signup }, label: 'Signup', path: 'signup' }
    ]
  }
}

export default paths
