import React, { Fragment } from 'react';
import { Link, Redirect, Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';
import logo from '../assets/logo.png';
import { getRoutes } from '../utils/utils';

const links = [
  {
    key: 'org',
    title: '组织',
    href: 'https://github.com/OOAD-Project',
  },
  {
    key: 'project',
    title: '项目地址',
    href: 'https://github.com/OOAD-Project/Admin-FE',
  },
  {
    key: 'help',
    title: '帮助说明',
    href: 'https://ooad-project.github.io/DashBoard/',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 OOAD-Project
  </Fragment>
);

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = 'EasyOrder';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - EasyOrder`;
    }
    return title;
  }
  render() {
    const { routerData, match } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img className={styles.logo} src={logo} alt="logo" />
                  <span className={styles.title}>Easy Order</span>
                </Link>
              </div>
              <div className={styles.desc}>扫码点餐后台管理系统</div>
            </div>
            <Switch>
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))}
              <Redirect exact from="/user" to="/user/login" />
            </Switch>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
