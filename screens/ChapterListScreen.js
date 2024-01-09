import { Text, View } from "react-native"

const ChapterListScreen = ({ route }) => {
    const {name} = route.params;
    return (
        <View>
            <Text>Chapter List Screen</Text>
            <Text>{name}</Text>
        </View>
    )
}

export default ChapterListScreen;