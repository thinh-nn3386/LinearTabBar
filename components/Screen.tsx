import { View, Text, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../theme'

interface ScreenProps {
  title: string
}

export const Screen = ({ title }: ScreenProps) => {
  return (
    <View
      style={$container}
    >
      <Text style={$text}>{title}</Text>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

const $text: TextStyle= {
  fontSize: 24,
  fontWeight: '500',
  color: colors.text.primary,
}