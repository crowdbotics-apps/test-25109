import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile216178Navigator from '../features/UserProfile216178/navigator';
import Settings216177Navigator from '../features/Settings216177/navigator';
import Settings216175Navigator from '../features/Settings216175/navigator';
import SignIn2216173Navigator from '../features/SignIn2216173/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile216178: { screen: UserProfile216178Navigator },
Settings216177: { screen: Settings216177Navigator },
Settings216175: { screen: Settings216175Navigator },
SignIn2216173: { screen: SignIn2216173Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
