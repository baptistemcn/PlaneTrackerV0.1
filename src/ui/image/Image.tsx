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
  testID?: string;
}

export const ReImage = ({
  resizeMode,
  source = DUMMYIMG,
  styles = { height: 64, width: 64 },
  testID = "image",
}: ReImageProps) => {
  return (
    <Image
      source={source}
      style={styles}
      testID={testID}
      resizeMode={resizeMode}
    />
  );
};
