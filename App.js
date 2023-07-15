import { useState } from "react";
import { StyleSheet, FlatList, View, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddGoal = (newInput) => {
    setGoals((prev) => [...prev, newInput]);
  };

  const handleDeleteGoal = (goal) => {
    setGoals((prev) => prev.filter((item) => item !== goal));
  };

  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color="#91bad6" onPress={toggleModal} />
        <GoalInput
          handleAddGoal={handleAddGoal}
          modalVisible={modalVisible}
          toggleModal={toggleModal}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => `${item}${index}`}
            renderItem={({ item }) => <GoalItem item={item} handleDelete={handleDeleteGoal} />}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
