import { connect } from 'react-redux';

import LoginPage from './LoginPage';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPageContainer;
