import { PrimaryButton } from "@/components/Buttons/Primary";
import { TextInput } from "@/components/InputText";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontSize";
import Margin from "@/constants/Margin";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create a new account.</Text>
      </View>
      <View style={styles.form}>
        <TextInput label="Names" />
        <TextInput label="Email" />
        <TextInput label="Password" secureTextEntry={true} />
        <TextInput label="Confirm Password" secureTextEntry={true} />
        <View style={styles.button}>
          <PrimaryButton title="Login" />
        </View>
      </View>
      <View style={styles.footer}>
        <Text>
          Already have an account?{" "}
          <Link href="/(auth)/login" style={styles.link}>
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    marginBottom: Margin.sm,
  },
  subtitle: {
    fontSize: FontSize.lg,
  },
  form: {
    marginVertical: Margin.xl,
  },
  button: {
    marginTop: Margin.lg,
  },
  footer: {
    marginVertical: Margin.lg,
    alignItems: "center",
    alignContent: "center",
  },
  link: {
    color: Colors.light.primary,
  },
});
