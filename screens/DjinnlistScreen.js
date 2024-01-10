import { Text, View } from "react-native"
import { Button } from "react-native-elements";
import { DJINN_INDEX } from "../shared/djinnindex";

const DjinnListScreen = ({ route, navigation }) => {
    const { name, djinn } = route.params;

    return (
        <View>
            <Text>Djinn List Screen</Text>
            <Text>{name}</Text>
            <Button
                title='Flint'
                onPress={() => navigation.navigate(
                    'djinndetails',
                    { djinniName: 'Flint' }
                )}
            />
        </View>
    )
}

export default DjinnListScreen;