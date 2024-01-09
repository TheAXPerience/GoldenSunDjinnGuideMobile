import { Text, View } from "react-native"

const ChecklistScreen = ({ route }) => {
    const { name } = route.params;

    return (
        <View>
            <Text>Checklist Screen</Text>
            <Text>{name}</Text>
        </View>
    )
}

export default ChecklistScreen;