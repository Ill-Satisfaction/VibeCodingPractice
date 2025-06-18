import { Text, View } from "react-native";
import NavBar from "../components/NavBar";
import { styles } from "../styles";

export default function Preferences() {
  return (
    <View style={styles.page}>
      <NavBar />
      <View style={styles.contentCenter}>
        <Text>Preferences Page</Text>
      </View>
    </View>
  );
}
