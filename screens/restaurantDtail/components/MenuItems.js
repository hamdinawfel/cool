import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import { Divider } from "react-native-elements";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  //   const dispatch = useDispatch();

  //   const selectItem = (item, checkboxValue) =>
  //     dispatch({
  //       type: "ADD_TO_CART",
  //       payload: {
  //         ...item,
  //         restaurantName: restaurantName,
  //         checkboxValue: checkboxValue,
  //       },
  //     });

  //   const cartItems = useSelector(
  //     (state) => state.cartReducer.selectedItems.items
  //   );

  //   const isFoodInCart = (food, cartItems) =>
  //     Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.menuItemStyle}>
          <FoodInfo />
          <FoodImage />
        </View>
        {/* <Divider
            width={0.5}
            orientation='vertical'
            style={{ marginHorizontal: 20 }}
          /> */}
      </View>
    </ScrollView>
  );
}

// const FoodInfo = (props) => (
//   <View style={{ width: 240, justifyContent: "space-evenly" }}>
//     <Text style={styles.titleStyle}>{props.food.title}</Text>
//     <Text>{props.food.description}</Text>
//     <Text>{props.food.price}</Text>
//   </View>
// );

const FoodInfo = () => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>title</Text>
    <Text>description</Text>
    <Text>15£</Text>
  </View>
);

const FoodImage = () => (
  <View>
    <Image
      //   source={{ uri: props.food.image }}
      source={{
        uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: 15,
      }}
    />
  </View>
);
