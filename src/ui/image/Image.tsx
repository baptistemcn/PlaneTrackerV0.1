import { DUMMYIMG } from "@assets";
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";

interface ReImageProps {
  resizeMode?: ImageResizeMode | undefined;
  source?: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
}

export const ReImage = ({
  resizeMode,
  source = DUMMYIMG,
  styles = { height: 64, width: 64 },
}: ReImageProps) => {
  return (
    <Image
      source={source}
      style={styles}
      testID="image"
      resizeMode={resizeMode}
    />
  );
};
