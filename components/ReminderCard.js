import { StyleSheet, View } from "react-native";
import React, {Component} from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const data = {
  r1: {
    title: "test1",
    description: "description1",
  },
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    borderColor: "black",
    backgroundColor: "white",
    height: "50vh",
    margin: "10px",
    // position: 'aboslute'
  },
});

export default class ReminderCard extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    return (
      <View style={styles.card}>
        <SegmentedControl
          values={["One", "Two"]}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({
              selectedIndex: event.nativeEvent.selectedSegmentIndex,
            });
          }}
        />
      </View>
    );
  }
}
