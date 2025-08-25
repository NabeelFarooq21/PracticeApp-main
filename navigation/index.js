import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../src/screens/Auth/Onboarding/Index';
const Stack = createStackNavigator();
import Splash from '../src/screens/Auth/Splash/Index';
import EmailLogin from '../src/screens/Auth/EmailLogin/Index';
import ForgetPass from '../src/screens/Auth/ForgetPass/Index';
import VerifyOtp from '../src/screens/Auth/VerifyOtp/Index';
import ResetPass from '../src/screens/Auth/ResetPass/Index';
import CreateAcc from '../src/screens/Auth/CreateAcc/Index';
import PhoneNum from '../src/screens/Auth/PhoneNum/Index';
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
      <Stack.Screen name='ResetPass' component={ResetPass}/>
      <Stack.Screen name='CreateAcc' component={CreateAcc}/>
      <Stack.Screen name='PhoneNum' component={PhoneNum}/>


      
    </Stack.Navigator>
  );
};

export default Navigation;
