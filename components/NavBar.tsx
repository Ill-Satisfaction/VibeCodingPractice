import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../styles";

export default function NavBar() {
  return (
    <View style={styles.nav}>
      <Link href="/grocery-plan">Grocery Plan</Link>
      <Link href="/meal-plan">Meal Plan</Link>
      <Link href="/preferences">Preferences</Link>
    </View>
  );
}
