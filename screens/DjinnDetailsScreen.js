import { View, Text } from "react-native";

const DjinnDetailsScreen = ({ route }) => {
    const {djinn} = route.params;

    return (
        <View>
            <Text>Djinn Details</Text>
        </View>
    );
}

export default DjinnDetailsScreen;