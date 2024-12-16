import Colors from "@/constants/Colors";
import { FontAwesome,  } from "@expo/vector-icons";
import {  Stack, useRouter } from "expo-router";

import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function MenuStack() {
  const router = useRouter();

  return (
    <>
      <Stack screenOptions={{ headerTitle: "Menu" }}>
        <Stack.Screen name="index" />
      </Stack>

      <View style={styles.cartContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("Cart icon pressed");
            router.push("/cart");
          }}
          style={{ padding: 10 }}
          activeOpacity={0.7}
        >
          <FontAwesome
            name="shopping-cart"
            size={35}
            color={Colors.light.tint}
            style={{
              marginRight: 10,
              marginBottom: -5,
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    position: "absolute",
    top: 28,
    right: 10,
    zIndex: 2000,
    elevation: 5, // for Android
    backgroundColor: "transparent",
  },
});
