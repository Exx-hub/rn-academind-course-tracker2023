import { Text, StyleSheet, Pressable, View } from "react-native";

const GoalItem = ({ item, handleDelete }) => {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={(item) => item.pressed && styles.pressedItem}
        onPress={() => handleDelete(item)}
      >
        <Text style={styles.goalItem}>{item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#91bad6",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    color: "#333",
    fontWeight: "bold",
  },
});
