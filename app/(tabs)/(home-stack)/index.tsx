import { colors } from "@/theme";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import {useReanimatedTransitionProgress} from 'react-native-screens/reanimated';
import {useAnimatedReaction} from 'react-native-reanimated';
import { SharedTransitionProgress } from "@/hook/useSharedProgress";


export default function Home() {
  const router = useRouter();
  const onPress = useCallback(() => {
    router.navigate("/note-detail");
  }, [router]);

  const {progress, goingForward} = useReanimatedTransitionProgress();

  useAnimatedReaction(
    () => progress.value,
    value => {
      SharedTransitionProgress.value = goingForward.value ? value : 1 - value;
    },
    [],
  );

  
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