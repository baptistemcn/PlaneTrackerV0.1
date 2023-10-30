/* eslint-disable no-console */
import { ReactNode } from "react";
import { RectButton } from "react-native-gesture-handler";

interface ReButtonProps {
  children: ReactNode;
}

export const ReButton = ({ children }: ReButtonProps) => (
  <RectButton onPress={() => console.log("Clicked")}>{children}</RectButton>
);
