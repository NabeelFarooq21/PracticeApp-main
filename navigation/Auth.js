import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Splash from '../src/screens/Auth/Splash/Index';
import Onboarding from '../src/screens/Auth/Onboarding/Index';
import EmailLogin from '../src/screens/Auth/EmailLogin/Index';
import ForgetPass from '../src/screens/Auth/ForgetPass/Index';
import VerifyOtp from '../src/screens/Auth/VerifyOtp/Index';
import ResetPass from '../src/screens/Auth/ResetPass/Index';
import CreateAcc from '../src/screens/Auth/CreateAcc/Index';
import PhoneNum from '../src/screens/Auth/PhoneNum/Index';
import LocationAccess from '../src/screens/Auth/LocationAccess/Index';
import VerifyNum from '../src/screens/Auth/VerifyNum/Index';
import ReadyAcc from '../src/screens/Auth/ProfileSetup/ReadyAcc/Index';
import PersonalInformation from '../src/screens/Auth/ProfileSetup/PersonalInformation/Index';
import Avatar from '../src/screens/Auth/ProfileSetup/Avatar/Index';
import PhoneVerification from '../src/screens/Auth/ProfileSetup/PhoneVerification/Index';
import Verification from '../src/screens/Auth/ProfileSetup/Verification/Index';
import AllSet from '../src/screens/Auth/ProfileSetup/AllSet/Index';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="EmailLogin" component={EmailLogin} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="CreateAcc" component={CreateAcc} />
      <Stack.Screen name="PhoneNum" component={PhoneNum} />
      <Stack.Screen name="VerifyNum" component={VerifyNum} />
      <Stack.Screen name="LocationAccess" component={LocationAccess} />
      <Stack.Screen name="ReadyAcc" component={ReadyAcc} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="Avatar" component={Avatar} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="AllSet" component={AllSet} />
    </Stack.Navigator>
  );
};

export default AuthStack;
