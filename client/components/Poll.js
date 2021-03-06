import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Option from "./Option.js";

export default class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollClicked: false
    };
    this.getTotalVotes = this.getTotalVotes.bind(this);
  }

  getTotalVotes() {
    var total = 0;
    for (var i = 0; i < this.props.poll.options.length; i++) {
      total = total + this.props.poll.options[i].votes;
    }
    return total;
  }

  render() {
    return (
      <View>
        <Card
          title={this.props.poll.question}
          containerStyle={{
            borderRadius: 5
          }}
          titleStyle={{
            textAlign: "left",
            paddingLeft: 10
          }}
        >
          <Text style={styles.whiteSpaceBottom}>
            {this.props.poll.description == null
              ? ""
              : this.props.poll.description}
          </Text>
          {this.props.poll.options.map(option => {
            return (
              <Option
                pollClicked={this.state.pollClicked}
                key={option.id}
                option={option}
                totalVotes={this.getTotalVotes()}
                press={() => {
                  this.setState({ pollClicked: true });
                }}
              />
            );
          })}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  whiteSpaceBottom: {
    paddingBottom: 5
  }
});
