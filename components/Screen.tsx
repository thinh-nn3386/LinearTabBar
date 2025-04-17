import { View, Text, TextStyle, ViewStyle } from 'react-native'
import { colors } from '../theme'

interface ScreenProps {
  title: string
  backgroundColor?: string
}

export const Screen = ({ title, backgroundColor=colors.systemGray.gray6 }: ScreenProps) => {
  return (
    <View style={[$container, { backgroundColor }]}>
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