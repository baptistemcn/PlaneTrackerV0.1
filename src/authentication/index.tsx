import { createStackNavigator } from "@react-navigation/stack";
import { AuthRoutes } from "../routes";
import { OnBoarding } from "./OnBoarding";

const AuthenticationStack = createStackNavigator<AuthRoutes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerTitle: undefined,
        headerShadowVisible: false,
      }}
    >
      <AuthenticationStack.Screen
        name="Onboarding"
        component={OnBoarding}
        options={{
          title: "",
          headerShown: false,
        }}
      />
    </AuthenticationStack.Navigator>
  );
};
