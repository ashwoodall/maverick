import rethinkdbdash from 'rethinkdbdash'
import config from '../../config'

const r = rethinkdbdash(config.rethink)

export default r