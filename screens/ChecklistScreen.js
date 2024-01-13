import { FlatList } from "react-native";
import { Avatar, CheckBox, ListItem } from "react-native-elements";
import { retrieveSprite } from "../shared/djinnimages";
import { toggleChecked } from "../features/checked/checkedSlice";
import { useSelector, useDispatch } from "react-redux";

const ChecklistScreen = ({ route, navigation }) => {
    const { name, djinn } = route.params;
    const checkedDjinn = useSelector((state) => state.checked);
    const dispatch = useDispatch();

    const DjinnListItem = ({ item: djinni }) => (
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
            <CheckBox
                checked={checkedDjinn.includes(djinni.id)}
                onPress={() => dispatch(toggleChecked(djinni.id))}
            />
        </ListItem>
    )

    return (
        <FlatList
            nestedScrollEnabled
            data={djinn}
            renderItem={DjinnListItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default ChecklistScreen;