import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const badgeStyles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    right: -6,
    top: -3,
    backgroundColor: "red",
    borderRadius: 6,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  badgeView: {
    width: 24,
    height: 24,
    margin: 5,
  },
});

export default class TabBarIcon extends React.Component {
  render() {
    const { name, focused, badgeCount } = this.props;

    return (
      <View style={badgeStyles.badgeView}>
        <Ionicons
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
        { badgeCount > 0 && (
          <View style={badgeStyles.badgeContainer}>
            <Text style={badgeStyles.badgeText}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}
