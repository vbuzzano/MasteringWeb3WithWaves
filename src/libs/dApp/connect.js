import { connect } from 'react-redux'

const mapDAppToProps = state => ({ dApp: state.dApp })
const useDAppStateFor = component => connect(mapDAppToProps)(component)

export default useDAppStateFor
