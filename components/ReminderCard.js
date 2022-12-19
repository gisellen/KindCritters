import { StyleSheet, View } from "react-native";
import React, { Component } from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { ListItem, Button } from "@rneui/themed";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native-web";
import { ScreenWidth } from "@rneui/base";

const data = [
  {
    title: "test1",
    description: "description1",
  },
  {
    title: "test2",
    description: "description2",
  },
];

const completed = [
  {
    title: "completedtest1",
    description: "description1",
  },
];

//consts for diff style values
const height = "100px";

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderColor: "black",
    height: "50vh",
    margin: "10px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  list: {
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "2px 2px 5px grey",
    height: "100px",
  },
  completed: {
    textDecorationLine: "line-through",
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
          values={["Reminders", "Completed"]}
          selectedIndex={this.state.selectedIndex}
          onChange={async (event) => {
            await this.setState({
              selectedIndex: event.nativeEvent.selectedSegmentIndex,
            });
          }}
        />
        {this.state.selectedIndex == 0 ? <Reminders /> : <Completed />}
      </View>
    );
  }
}

function Reminders() {
  return (
    <View>
      <Text style={styles.title}>Upcoming</Text>
      {data.map((l, i) => (
        <ListItem.Swipeable
          containerStyle={styles.list}
          key={i}
          rightWidth={ScreenWidth/4}
          leftWidth={ScreenWidth/4}
          leftContent={(reset) => (
            <Button
              name="Edit"
              icon={<FontAwesome name={"trash-o"} size={30} color="white" />}
              buttonStyle={{
                height: "100px",
                backgroundColor: "blue",
                marginTop: "10px",
              }}
            />
        )}
          rightContent={(reset) => (
              <Button
                name="Delete"
                icon={<FontAwesome name={"trash-o"} size={30} color="white" />}
                buttonStyle={{
                  height: "100px",
                  backgroundColor: "red",
                  marginTop: "10px",
                }}
              />
          )}
        >
          <ListItem.Content>
            <ListItem.Title>{l.title}</ListItem.Title>
            <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem.Swipeable>
      ))}
    </View>
  );
}

function Completed() {
  return (
    <View>
      <Text style={styles.title}>Completed</Text>
      {completed.map((l, i) => (
        <ListItem.Swipeable
          containerStyle={styles.list}
          key={i}
          rightContent={(reset) => (
            <Button
              name="Delete"
              icon={<FontAwesome name={"trash-o"} size={30} color="white" />}
              buttonStyle={{
                height: "100px",
                backgroundColor: "red",
                marginTop: "10px",
              }}
            />
          )}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.completed}>{l.title}</ListItem.Title>
            <ListItem.Subtitle style={styles.completed}>
              {l.description}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem.Swipeable>
      ))}
    </View>
  );
}
