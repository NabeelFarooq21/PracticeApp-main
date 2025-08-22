import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../src/screens/Auth/Onboarding/Index';
const Stack = createStackNavigator();
import Splash from '../src/screens/Auth/Splash/Index';
import EmailLogin from '../src/screens/Auth/EmailLogin/Index';
import ForgetPass from '../src/screens/Auth/ForgetPass/Index';
import VerifyOtp from '../src/screens/Auth/VerifyOtp/Index';
const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="EmailLogin" component={EmailLogin}/>
      <Stack.Screen name="ForgetPass" component={ForgetPass}/>
      <Stack.Screen name='VerifyOtp' component={VerifyOtp}/>


      
    </Stack.Navigator>
  );
};

export default Navigation;
