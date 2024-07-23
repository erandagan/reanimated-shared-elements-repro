import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, Text, View } from "react-native";
import Animated from "react-native-reanimated";

function HomeScreen() {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Animated.Image
        sharedTransitionTag="image"
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 100, height: 100 }}
      />
      <Button title="Open Modal" onPress={() => nav.navigate("Modal")} />
    </View>
  );
}

function ModalScreen() {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}>
      <Animated.Image
        sharedTransitionTag="image"
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 200, height: 200 }}
      />
      <Button
        title={"Go to Details"}
        onPress={() => {
          nav.dispatch(StackActions.replace("Detail"));
        }}
      />
      <Button title={"Close"} onPress={() => nav.goBack()} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Animated.Image
        sharedTransitionTag="image"
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            presentation: "transparentModal",
          }}
        />
        <Stack.Screen name="Detail" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
