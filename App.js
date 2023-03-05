import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  containerTop: {
    flex: 1,
    backgroundColor: "#002654",
  },
  containerCenter: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
    backgroundColor: "#CD1027",
  },
  top: {
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: "#BBBBBB",
    padding: 20,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#333333",
  },
  center: {
    backgroundColor: "#BBBBBB",
    alignItems: "center",
    borderRadius: 200,
    width: 150,
    height: 150,
    borderColor: "#333333",
    justifyContent: "center",
  },
  bottom: {
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: "#66CCFF",
    padding: 20,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#333333",
    borderRadius: 80,
  },
  topText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  centerText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  bottomText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
