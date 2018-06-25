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
  handleSubmit = (err, values) => {
    if (!err) {
      this.props.dispatch({
        type: 'login/login',
        payload: {
          ...values,
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
            login.type === 'account' &&
            !submitting &&
            this.renderMessage('账户或密码错误（admin/888888）')}
          <UserName name="username" placeholder="admin" />
          <Password name="password" placeholder="888888" />
          <Submit loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}
