import { Text, View, TouchableOpacity } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="solid" size="md" action="primary">
        <ButtonText>Click me</ButtonText>
      </Button>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
