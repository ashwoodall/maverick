// Views
import App from 'views/App/App'
import Header from 'modules/Header/HeaderContainer'
import Footer from 'modules/Footer/FooterContainer'
import Home from 'views/Home/Home'
import Groups from 'views/Groups/Groups'
import Login from 'views/Login/Login'
import Signup from 'views/Signup/SignupContainer'

const paths = {
  app: {
    path: '/',
    component: App,
    index: {
      label: 'Home',
      components: { main: Home, header: Header, footer: Footer }
    },
    children: [
      { components: { main: Login }, label: 'Login', path: 'login' },
      { components: { main: Signup }, label: 'Signup', path: 'signup' },
      { components: { main: Groups, header: Header, footer: Footer }, label: 'Groups', path: 'groups' },
    ]
  }
}

export default paths
