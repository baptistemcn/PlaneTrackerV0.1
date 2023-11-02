import { ReText } from "@components";
import { useGlobalStyles } from "@theme";
import { View } from "react-native";

export const Theming = () => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.layout}>
      <ReText>Theming</ReText>
    </View>
  );
};
