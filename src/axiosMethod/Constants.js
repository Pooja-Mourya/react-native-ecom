let domain = 'http://192.168.1.34:8000';

export default {
  AsyncStorageKey: '@user',
  base_url: `${domain}/api/`,
  endPoint: {
    login: 'user-login',
    userManagement: 'user-management',
    userList: 'user-managements',
    productList: 'products',
    product: 'product',
    logout: 'user-logout',
    stockList: 'stock-managements',
    createStock: 'stock-management',
  },
};
