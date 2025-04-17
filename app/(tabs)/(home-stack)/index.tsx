import { colors } from "@/theme";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Home() {
  const router = useRouter();
  const onPress = useCallback(() => {
    router.navigate("/note-detail");
  }, [router]);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.text}>Go Note</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.systemGray.gray6,
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: colors.systemGray.gray3,
    padding: 16,
    borderRadius: 8,
    marginBottom: 100,
  }, 
  text: {
    color: colors.text.primary,
  }
  
})