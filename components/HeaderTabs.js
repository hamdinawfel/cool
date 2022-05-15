import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs(props) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text='Delivery'
        btnColor='black'
        textColor='white'
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text='Pickup'
        btnColor='#fff'
        textColor='#000'
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      color: props.textColor,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activeTab !== props.text ? "black" : "white",
        fontSize: 16,
        fontWeight: "bold",
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
