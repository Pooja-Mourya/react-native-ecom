import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import MyStack from './src/navigation/MyStack';
import {Store} from './src/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// import {View, Text} from 'react-native';
// import React from 'react';
// import axios from 'axios';

// let token =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGMwMmYzNTkzOGY1N2UwN2NlNzMyYzk3ZTliMWQ1ZjU5NzY5NWQ2ZjFjNTY2NzVhNjIxNzc5YjY3ZTQ1NTMzNDY5MWVkMDU1NTRkNTkxMTQiLCJpYXQiOjE2NzM4NDk4NDkuNzk3MDQyLCJuYmYiOjE2NzM4NDk4NDkuNzk3MDQ4LCJleHAiOjE3MDUzODU4NDkuNzQ1Nzg4LCJzdWIiOiIxMyIsInNjb3BlcyI6W119.HrmPg8-5oYogmaVvpCvfc9OYJ4uvo25n8urFPO7sXjmzwJkv2x0h-zqor89PPI-ebW7FJ_ozHBiZl1tn-D8CzBw0h5An5lro71wmhaGvolUOlzcWKkVeXl4pSNPhClfQtVmQlEOIkHLkrBpR3Enz-VEtdqUYHPReL6InY2KRFpJXVROeYkmE7GcOhzKrUmiFqrTZExU6SNrU5XyIj0D6ZlRgtRK6-wclwM9T8mp9trcTVb6tCpBKZOMvTmayn-YNCc44_gbNApTq8xRReZkavPO2a_DWq-GfykoOZEaGeYFafEdIr731AqXgDepCYGwfdbc6izkAAk34yYCqYNcQb3mKbjANsRBPMtkaT6q-jEsVaCg9iMqF4Q7qQH3KVCDgXtgnFGRXMs8IP92EX_U-hh7_83NnBJ1wFsAs3qK5AugTutV3VIjyZ35q-3v3uSQUn2jPL15-sYWzUKfmniKKmsNJlT9-nLhVEmb2GSzJ5CB91fswu7TlHP22ayKEGd--vANEeiiYTJecwpoo0BRDb6_mKF6oya1KPIg3tBK0_Kqtd0zpGZ8ntccV4blu-eOX5zjvY56LFYlF2_5ftQmHV0W6OpcIj2KWMURkCz6uekzT6z-FP1o9RAwXo35GjCSTyXqZxyVR2b5PblW01hF-hQMtKdyXCg3nVQp8BqopQy4';

// const App = () => {
//   const postFunction = async () => {
//     const header = {
//       Accept: '*/*',
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + token,
//     };

//     const config = {
//       Headers: header,
//     };
//     await axios
//       .post(
//         'http://192.168.1.34:8000/user-management',
//         {
//           name: 'name',
//           email: 'email',
//           password: 'password',
//           password_confirmation: 'password_confirmation',
//           mobile: 'mobile',
//           gender: 'gender',
//           address: 'address',
//           account_balance: 'account_balance',
//         },
//         config,
//       )
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error.massege);
//       });
//   };
//   return (
//     <View>
//       <Text
//         style={{backgroundColor: 'pink', margin: 20}}
//         onPress={postFunction}
//       >
//         App
//       </Text>
//     </View>
//   );
// };

// export default App;
