import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@rneui/themed";

import { AuthRoutes } from "@routes";

import { OnBoarding } from "./OnBoarding";
import { Theming } from "./Theming";

const AuthenticationStack = createStackNavigator<AuthRoutes>();

export const AuthenticationNavigator = () => {
  const { theme } = useTheme();
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerTitle: undefined,
        headerShadowVisible: false,
      }}
      initialRouteName="Onboarding"
    >
      <AuthenticationStack.Screen
        name="Onboarding"
        component={OnBoarding}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <AuthenticationStack.Screen
        name="Theming"
        component={Theming}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      />
    </AuthenticationStack.Navigator>
  );
};
