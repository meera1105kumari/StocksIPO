import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import CustomLoginScreen from './components/CustomLoginScreen';
import CustomSignupScreen from './components/CustomSignupScreen';
import CustomDashboardScreen from './components/CustomDashboardScreen';
import Top20StackScreen from './components/Top20StackScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CustomLoginScreen">
          <Stack.Screen name="CustomLoginScreen" component={CustomLoginScreen} />
          <Stack.Screen name="CustomSignupScreen" component={CustomSignupScreen} />
          <Stack.Screen name="CustomDashboardScreen" component={CustomDashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
