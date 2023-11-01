import {
  ImageResizeMode,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";

export interface ReImageProps {
  resizeMode?: ImageResizeMode | undefined;
  source?: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
  testID?: string;
}
