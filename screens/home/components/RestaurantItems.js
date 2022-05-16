import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function RestaurantItems(props) {
  return (
    <>
      {props.restaurantsData !== undefined &&
        props.restaurantsData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 0 }}>
            <View
              style={{ padding: 15, backgroundColor: "#fff", marginTop: 10 }}>
              <View style={{ position: "relative" }}>
                <Image
                  source={{
                    uri: restaurant.image_url,
                  }}
                  style={{
                    width: "100%",
                    height: 180,
                    resizeMode: "cover",
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                  }}>
                  <AntDesign
                    name='hearto'
                    size={25}
                    style={{
                      color: "white",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}>
                <View>
                  <Text style={{ fontWeight: "900", fontSize: 15 }}>
                    {restaurant.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "normal",
                      fontSize: 10,
                      color: "grey",
                    }}>
                    30-45 • min
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 50,
                    width: 25,
                    height: 25,
                    backgroundColor: "#eee",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Text>4</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
}
