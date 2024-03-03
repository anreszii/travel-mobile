import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Partners from '../screens/Partners/Partners';
import { View } from 'react-native';
import Info from '../screens/Info/Info';
import Favorite from '../screens/Favorite/Favorite';
import Other from '../screens/Other/Other';
import SubCategories from '../screens/SubCategories/SubCategories';
import ListPartners from '../screens/ListPartners/ListPartners';
import BottomBar from '../layouts/BottomBar/BottomBar';
import ChangeInfo from '../screens/ChangeInfo/ChangeInfo';
import CategoryInfo from '../screens/CategoryInfo/CategoryInfo';
import IncorrectInfo from '../screens/IncorrectInfo/IncorrectInfo';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import MyOrg from '../screens/MyOrg/MyOrg';
import ForgotPass from '../screens/ForgotPass/ForgotPass';
import EditProfile from '../screens/EditProfile/EditProfile';
import AddOrg from '../screens/AddOrg/AddOrg';
import ChangePhoto from '../screens/ChangePhoto/ChangePhoto';
import StatOrg from '../screens/StatOrg/StatOrg';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const TabNavigator = ({ route }: any) => {
  return (
    <Tab.Navigator
      tabBar={() => <></>}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Partners" component={Partners}></Tab.Screen>
      <Tab.Screen name="Info" component={Info}></Tab.Screen>
      <Tab.Screen name="Favorite" component={Favorite}></Tab.Screen>
      <Tab.Screen name="Other" component={Other}></Tab.Screen>
    </Tab.Navigator>
  );
};

export const PublicStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
};

export const PrivateStackNavigator = ({ route }: any) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator}></Stack.Screen>
      <Stack.Screen
        name="SubCategories"
        //@ts-ignore
        component={SubCategories}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="ListPartners"
        //@ts-ignore
        component={ListPartners}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="ChangeInfo"
        //@ts-ignore
        component={ChangeInfo}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="CategoryInfo"
        //@ts-ignore
        component={CategoryInfo}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="IncorrectInfo"
        //@ts-ignore
        component={IncorrectInfo}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="SignIn"
        //@ts-ignore
        component={SignIn}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="SignUp"
        //@ts-ignore
        component={SignUp}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="MyOrg"
        //@ts-ignore
        component={MyOrg}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="ForgotPass"
        //@ts-ignore
        component={ForgotPass}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="EditProfile"
        //@ts-ignore
        component={EditProfile}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="AddOrg"
        //@ts-ignore
        component={AddOrg}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="ChangePhoto"
        //@ts-ignore
        component={ChangePhoto}
        initialParams={route}></Stack.Screen>
      <Stack.Screen
        name="StatOrg"
        //@ts-ignore
        component={StatOrg}
        initialParams={route}></Stack.Screen>
    </Stack.Navigator>
  );
};
