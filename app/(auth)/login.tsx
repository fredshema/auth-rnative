import { PrimaryButton } from "@/components/Buttons/Primary";
import { TextInput } from "@/components/InputText";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontSize";
import Margin from "@/constants/Margin";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Authenticate to access your account.
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput label="Email" />
        <TextInput label="Password" secureTextEntry={true} />
        <View style={styles.button}>
          <PrimaryButton title="Login" />
        </View>
      </View>
      <View style={styles.footer}>
        <Text>
          Don't have an account?{" "}
          <Link href="/(auth)/register" style={styles.link}>
            Register
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
