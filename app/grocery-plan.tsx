import { Text, View } from "react-native";
import NavBar from "../components/NavBar";
import { styles } from "../styles";

export default function GroceryPlan() {
  return (
    <View style={styles.page}>
      <NavBar />
      <View style={styles.contentCenter}>
        <Text>Grocery Plan Page</Text>
      </View>
    </View>
  );
}
