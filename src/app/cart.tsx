import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { useCart } from "@/provider/CartProvider";
import { StatusBar } from "react-native";
import CartListItem from "@/components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <StatusBar />
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({});
