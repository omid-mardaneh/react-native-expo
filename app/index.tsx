import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>hiiiiiii</Text>
      <StatusBar style="auto" />
      <Link href={"./profile"}>Go to Profile</Link>
    </View>
  );
};

export default App;
