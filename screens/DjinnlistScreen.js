import { Text, View } from "react-native"
import { Button } from "react-native-elements";

const DjinnListScreen = ({ route, navigation }) => {
    const { name } = route.params;

    return (
        <View>
            <Text>Djinn List Screen</Text>
            <Text>{name}</Text>
            <Button
                title='Flint'
                onPress={() => navigation.navigate('djinndetails', { djinn: { name: 'Flint' } })}
            />
        </View>
    )
}

export default DjinnListScreen;