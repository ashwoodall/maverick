// Core
import { connect } from 'react-redux'

// Components
import Footer from './Footer'

const mapStateToProps = ({ app: { footer = {} } }) => {
  const { active = true } = footer

  return { active }
}

export default connect(mapStateToProps)(Footer)
