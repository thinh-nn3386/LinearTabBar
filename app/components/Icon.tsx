import {
  ColorValue,
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../theme';

export type IconTypes = keyof typeof iconRegistry;

interface IconProps {
  /**
   * The name of the icon
   */
  icon: IconTypes;

  /**
   * An optional tint color for the icon
   */
  color?: ColorValue;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress'];
}

export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size = 24,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
  } = props;

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    {tintColor: color ?? colors.text.primary, width: size, height: size},
    $imageStyleOverride,
  ];

  return (
    <View style={$containerStyleOverride}>
      <Image style={$imageStyle} source={iconRegistry[icon]} />
    </View>
  );
}

export const iconRegistry = {
  'arrow-left': require('../../assets/arrow-left.png'),
  'inbox-fill': require('../../assets/chat-fill.png'),
  inbox: require('../../assets/chat.png'),
  'settings-fill': require('../../assets/gear-six-fill.png'),
  settings: require('../../assets/gear-six.png'),
  'home-fill': require('../../assets/house-fill.png'),
  home: require('../../assets/house.png'),
  'list-fill': require('../../assets/list-fill.png'),
  list: require('../../assets/list.png'),
  'search-fill': require('../../assets/magnifying-glass-fill.png'),
  search: require('../../assets/magnifying-glass.png'),
  'note-fill': require('../../assets/note-pencil-fill.png'),
  note: require('../../assets/note-pencil.png'),
};

const $imageStyleBase: ImageStyle = {
  resizeMode: 'contain',
};
