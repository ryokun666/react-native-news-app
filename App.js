import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { store } from "./store";
import { Provider } from "react-redux";
import { HomeScreen } from "./screens/HomeScreen";
import { ArticleScreen } from "./screens/ArticleScreen";
import { ClipScreen } from "./screens/ClipScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === "HomeTab") {
      return <FontAwesome name="home" size={size} color={color} />;
    } else if (route.name === "ClipTab") {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
  // tabBarActiveTintColor: "tomato", // アイコンの色とか指定出来る。
  // tabBarInactiveTintColor: "gray",
});

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ headerShown: false, title: "ホーム" }}
          />
          <Tab.Screen
            name="ClipTab"
            component={ClipScreen}
            options={{ headerShown: false, title: "保存" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
