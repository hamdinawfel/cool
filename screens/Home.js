import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";
import { YELP_API_KEY } from "react-native-dotenv";

const localRestaurants = [
  {
    name: "Habib bay - Bab Khadra",
    image_url:
      "http://www.kapitalis.com/anbaa-tounes/wp-content/uploads/2022/04/%D8%A7%D9%84%D8%AD%D8%A8%D9%8A%D8%A8-%D8%A8%D8%A7%D9%8A.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Habib bay - Bab Khadra",
    image_url:
      "http://www.kapitalis.com/anbaa-tounes/wp-content/uploads/2022/04/%D8%A7%D9%84%D8%AD%D8%A8%D9%8A%D8%A8-%D8%A8%D8%A7%D9%8A.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
];

export default function Home() {
  const [restaurantsData, setRestaurantData] = useState(localRestaurants);
  const [location, setLocation] = useState("New York");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=food&location=${location}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [location, activeTab]);
  return (
    <SafeAreaView style={styles.SaveViewAndroid}>
      <View style={{ padding: 15, backgroundColor: "white" }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar handleLocation={setLocation} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantsData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SaveViewAndroid: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#eee",
    flex: 1,
  },
});
