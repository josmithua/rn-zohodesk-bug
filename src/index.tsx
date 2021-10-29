import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as ZD from "./zohoDesk";

const userToken = "your user token";
ZD.init({
  enableLogs: true,
  orgId: "your org id",
  appId: "your app id",
  dataCenter: "your data center",
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  async function handleSetUserToken() {
    try {
      await ZD.setZohoDeskUserToken(userToken);
      console.log("setZohoDeskUserToken success");
      updateLoggedInState();
    } catch (error) {
      console.warn(error);
    }
  }

  async function handleLogout() {
    try {
      await ZD.logoutZohoDeskUser();
      console.log("logoutZohoDeskUser success");
      updateLoggedInState();
    } catch (error) {
      console.warn(error);
    }
  }

  async function updateLoggedInState() {
    setIsLoggedIn(await ZD.isZohoDeskUserSignedIn());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Instructions to reproduce:{"\n\n"}
        1. Click Log In.{"\n"}
        2. Click Show Portal if desired, to verify that we are logged in.{"\n"}
        3. Click Log Out.{"\n"}
        4. If log out works, go back to step 1 and repeat.{"\n"}
        5. If log out doesn't work:{"\n\t"} 1) click Update to show that it
        still reports logged in.{"\n\t"}2) Click Log Out again and notice
        promise rejection.{"\n"}
        6. Click Show Portal.{"\n"}
        7. Click Update OR Log Out, and notice how the status updates correctly.
        Log In works again after this.
      </Text>
      <Text style={[styles.text]}>
        Is logged in: {isLoggedIn ? "true" : "false"}
      </Text>
      <Pressable
        onPress={updateLoggedInState}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text>Update logged in status</Text>
      </Pressable>
      <View style={styles.authBtns}>
        <Pressable
          onPress={handleSetUserToken}
          style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
        >
          <Text>Log In (Set user token)</Text>
        </Pressable>
        <Pressable
          onPress={handleLogout}
          style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
        >
          <Text>Log Out</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => ZD.showZohoDeskPortalHome()}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text>Show Portal</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  authBtns: {
    margin: 16,
    flexDirection: "row",
  },
  btn: {
    margin: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
  btnPressed: {
    transform: [{ scale: 0.9 }],
  },
  text: {
    fontSize: 16,
    margin: 4,
    padding: 8,
  },
});
