// Core
import { connect } from 'react-redux'

// Components
import Header from './Header'

const mapStateToProps = ({ app: { header = {} } }) => {
  const { active = true } = header

  return { active }
}

export default connect(mapStateToProps)(Header)
