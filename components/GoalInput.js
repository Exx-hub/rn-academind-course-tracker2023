import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  KeyboardAvoidingView,
} from "react-native";

const GoalInput = ({ handleAddGoal, modalVisible, toggleModal }) => {
  const [goalInput, setGoalInput] = useState("");

  const handleInput = (val) => {
    setGoalInput(val);
  };

  const handlePress = () => {
    if (goalInput) {
      handleAddGoal(goalInput);
      setGoalInput("");
      toggleModal();
    }
  };

  const handleCancel = () => toggleModal();

  return (
    <Modal visible={modalVisible} animationType="slide">
      <KeyboardAvoidingView style={styles.addContainer} behavior="height">
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={goalInput}
          onChangeText={handleInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handlePress} color="#91bad6" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  addContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    flex: 1,
    backgroundColor: "#1e3f66",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bcd2e8",
    backgroundColor: "#bcd2e8",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
