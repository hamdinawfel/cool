import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
      <HeaderButton
        text='Delivery'
        btnColor='black'
        textColor='white'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text='Pockup'
        btnColor='#fff'
        textColor='#000'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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
