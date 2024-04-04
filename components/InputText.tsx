import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontSize";
import Margin from "@/constants/Margin";
import Padding from "@/constants/Padding";
import Radius from "@/constants/Radius";
import {
  TextInput as DefaultTextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Text, View } from "./Themed";

export function TextInput(props: TextInputProps & { label: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <DefaultTextInput {...props} style={[props.style, styles.input]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Margin.sm,
  },
  label: {
    marginBottom: Margin.label.bottom,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.secondary,
    paddingVertical: Padding.md,
    paddingHorizontal: Padding.md,
    borderRadius: Radius.sm,
    fontSize: FontSize.md,
    backgroundColor: Colors.light.tertiary,
    color: Colors.light.text,
  },
});
