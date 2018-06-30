import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  // return request('/api/currentUser');
  return {
    name: 'Admin',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001'
  };
}
