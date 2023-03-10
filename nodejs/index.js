var admin = require('firebase-admin');

var serviceAccount = require('./lastpro-8de23-firebase-adminsdk-bv0xh-45fd639773.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lastpro-8de23-default-rtdb.firebaseio.com',
});

const message = {
  notification: {
    title: 'add app notification',
    body: 'click to open notification',
  },
  token:
    'ehak4Q0sT1mhZh-GScSqt1:APA91bGjJM4R3fqT_wyex5lvjfy8bT8c65FjVe5xWzIvnSUIDFsdst3IH3OgsO4-sOh3A8_zsERzt3PvPx_8kdteme93El5mZhQWlV1M0Uu3AEYNDwXBZonaPLy-NM_JTn3ZumdmzcmF',
};

admin
  .messaging()
  .send(message)
  .then(res => console.log('server running successfully', res))
  .catch(err => console.log('err', err));
