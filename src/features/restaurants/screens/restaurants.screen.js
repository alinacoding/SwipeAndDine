import React, { useContext } from "react";
import { View } from "react-native";
import { StatusBar, SafeAreaView, FlatList, Pressable } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../../src/components/utility/safe-area.component";
// import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { Spacer } from "../../../components/spacer/spacer.component";
const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left=-25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  topL 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  console.log(navigation);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading>
            size={50}
            animating={true}
            colors={Colors.blue300}
          </Loading>
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate("RestaurantsDetail")}>
              <RestaurantInfoCard restaurant={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16, marginTop: 16 }}
      />
    </SafeArea>
  );
};
