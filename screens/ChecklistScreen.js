import { FlatList, View } from "react-native";
import { Avatar, Button, CheckBox, Icon, ListItem } from "react-native-elements";
import { retrieveSprite } from "../shared/djinnimages";
import { toggleChecked } from "../features/checked/checkedSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const ChecklistScreen = ({ route, navigation }) => {
    const { name, djinn } = route.params;
    const [showChecked, setShowChecked] = useState(false);

    const checkedDjinn = useSelector((state) => state.checked);
    const dispatch = useDispatch();

    const colorByElement = (element) => {
        let color = '#00000030';
        switch(element) {
            case 'mercury':
                color = '#00f8f830';
                break;
            case 'mars':
                color = '#f8000030';
                break;
            case 'venus':
                color = '#f8f80030';
                break;
            case 'jupiter':
                color = '#e070b030';
                break;
        }
        return color;
    }

    const resetForGame = () => {

    }

    const DjinnListItem = ({ item: djinni }) => (
        <ListItem
            topDivider
            bottomDivider
            onPress={() => navigation.navigate(
                'djinndetails',
                { djinniName: djinni.name }
            )}
            containerStyle={{
                backgroundColor: colorByElement(djinni.element),
                borderColor: 'black'
            }}
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
                uncheckedColor='green'
                checkedColor='green'
            />
        </ListItem>
    )

    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                    columnGap: 5
                }}
            >
                <Icon
                    type='font-awesome'
                    name='square-o'
                    size={48}
                    onPress={() => setShowChecked(false)}
                />
                <Icon
                    type='font-awesome'
                    name='check-square-o'
                    size={48}
                    onPress={() => setShowChecked(false)}
                />
                <Icon
                    type='font-awesome'
                    name='refresh'
                    size={48}
                    onPress={() => resetForGame()}
                />
            </View>

            <FlatList
                nestedScrollEnabled
                data={djinn.filter((djinni) =>
                    checkedDjinn.includes(djinni.id) === showChecked
                )}
                renderItem={DjinnListItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    )
}

export default ChecklistScreen;