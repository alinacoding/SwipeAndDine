import React, { useState } from "react";

import { RestaurantInfoCard } from "./restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard style={{ flex: 0.1 }} restaurant={restaurant} />
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict"></List.Item>
          <List.Item title="Classic Breakfast"></List.Item>
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger with Fries"></List.Item>
          <List.Item title="Steak Sandwich"></List.Item>
          <List.Item title="Mushroom soup"></List.Item>
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese"></List.Item>
          <List.Item title="Steak Sandwich"></List.Item>
          <List.Item title="Steak"></List.Item>
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee"></List.Item>
          <List.Item title="Coca-cola"></List.Item>
          <List.Item title="Pepsi"></List.Item>
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
