// Views
import Activate from 'modules/Activate'
import App from 'views/App/App'
import Conversation from 'views/Conversation'
import Forgot from 'modules/Forgot'
import Login from 'views/Login/Login'
import Messages from 'views/Messages'
import People from 'views/People'
import Person from 'views/Person'
import Profile from 'views/Profile/Profile'
import Reference from 'views/Reference'
import Reset from 'modules/Reset'
import Signup from 'views/Signup/Signup'
import Verification from 'modules/Verification'

// Modules
import Header from 'modules/Header'
import Footer from 'modules/Footer/FooterContainer'

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
      { components: { main: Activate }, label: 'Activate', path: 'activate' },
      { components: { main: Conversation, header: Header, footer: Footer }, label: 'Conversation', path: 'messages/:conversationId', onEnter: requireAuth },
      { components: { main: Forgot }, label: 'Forgot Password', path: '/forgot' },
      { components: { main: Login }, label: 'Login', path: 'login', onEnter: isLoggedIn },
      { components: { main: Messages, header: Header, footer: Footer }, label: 'Messages', path: 'messages', onEnter: requireAuth },
      { components: { main: People, header: Header, footer: Footer }, label: 'People', path: 'people', onEnter: requireAuth },
      { components: { main: Profile, header: Header, footer: Footer }, label: 'Profile', path: 'profile', onEnter: requireAuth },
      { components: { main: Person, header: Header, footer: Footer }, label: 'Person', path: 'person/:userId', onEnter: requireAuth },
      { components: { main: Signup }, label: 'Signup', path: 'signup' },
      { components: { main: Reference }, label: 'Reference', path: 'reference/:userId', onEnter: requireAuth },
      { components: { main: Reset }, label: 'Reference', path: 'reset/:token' },
      { components: { main: Verification }, label: 'Verification', path: 'verification/:userEmail' },
    ]
  }
}

export default paths
