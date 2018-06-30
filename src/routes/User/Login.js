import React, { Component } from 'react';
import { connect } from 'dva';
import { Alert } from 'antd';
import Login from 'components/Login';
import styles from './Login.less';

const { UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
export default class LoginPage extends Component {
  handleSubmit = (err, { username, password }) => {
    if (!err) {
      this.props.dispatch({
        type: 'login/login',
        payload: {
          name: username,
          psw: password,
        },
      });
    }
  };

  renderMessage = content => {
    return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
  };

  render() {
    const { login, submitting } = this.props;
    return (
      <div className={styles.main}>
        <Login onSubmit={this.handleSubmit}>
          {login.status === 'error' &&
            !submitting &&
            this.renderMessage('账户或密码错误（root/Gzm20125）')}
          <UserName name="username" placeholder="root" />
          <Password name="password" placeholder="Gzm20125" />
          <Submit loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}
