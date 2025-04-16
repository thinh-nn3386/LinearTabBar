import { View, ViewStyle, Text } from "react-native";
import { colors } from "../theme";

export default function Index() {
  return (
    <View style={$container} >
      <Text>Welcome to the app!</Text>
    </View>
  );
}


const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.background.primary,
}