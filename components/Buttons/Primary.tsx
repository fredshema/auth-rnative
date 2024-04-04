import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontSize";
import Padding from "@/constants/Padding";
import Radius from "@/constants/Radius";
import { ButtonProps, Pressable, StyleSheet } from "react-native";
import { Text } from "../Themed";

export function PrimaryButton(props: ButtonProps) {
  return (
    <Pressable {...props} style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Radius.sm,
    padding: Padding.md,
    elevation: 3,
    backgroundColor: Colors.light.primary,
  },
  text: {
    fontSize: FontSize.lg,
    fontWeight: "500",
    color: Colors.light.background,
  },
});
