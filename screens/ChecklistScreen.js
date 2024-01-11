import { FlatList } from "react-native";
import { Avatar, CheckBox, ListItem } from "react-native-elements";
import { retrieveSprite } from "../shared/djinnimages";

const ChecklistScreen = ({ route, navigation }) => {
    const { name, djinn } = route.params;

    const renderDjinniListItem = ({ item: djinni }) => (
        <ListItem
            bottomDivider
            onPress={() => navigation.navigate(
                'djinndetails',
                { djinniName: djinni.name }
            )}
        >
            <Avatar
                size={48}
                source={retrieveSprite(name, djinni.image)}
            />
            <ListItem.Content>
                <ListItem.Title>{djinni.name}</ListItem.Title>
            </ListItem.Content>
            <CheckBox />
        </ListItem>
    )

    return (
        <FlatList
            nestedScrollEnabled
            data={djinn}
            renderItem={renderDjinniListItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default ChecklistScreen;