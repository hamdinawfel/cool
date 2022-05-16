import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GOOGLE_PLACES_API_KEY } from "react-native-dotenv";

export default function SearchBar({ handleLocation }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          handleLocation(data.description.split(",")[0]);
        }}
        query={{
          key: `${GOOGLE_PLACES_API_KEY}`,
          language: "en",
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name='location-sharp' size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              borderRadius: 30,
              backgroundColor: "#fff",
              alignItems: "center",
              padding: 9,
              marginRight: 8,
            }}>
            <AntDesign
              name='clockcircle'
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
