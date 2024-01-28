import { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Avatar, CheckBox, ListItem } from "react-native-elements";
import { retrieveSprite } from "../shared/djinnimages";
import { toggleChecked } from "../features/checked/checkedSlice";
import { useSelector, useDispatch } from "react-redux";

const djinnIcons = [
    require('../assets/images/icons/venus_icon.png'),
    require('../assets/images/icons/mars_icon.png'),
    require('../assets/images/icons/jupiter_icon.png'),
    require('../assets/images/icons/mercury_icon.png'),
    require('../assets/images/icons/summon_icon.png')
];

const DjinnListScreen = ({ route, navigation }) => {
    const { name, djinn } = route.params;
    const [element, setElement] = useState('venus');
    const [title, setTitle] = useState('List of Venus Djinni');

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
                    justifyContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 15,
                    columnGap: 5
                }}
            >
                <Avatar
                    source={djinnIcons[0]}
                    size={48}
                    onPress={() => {
                        setElement('venus')
                        setTitle('List of Venus Djinni')
                    }}
                />
                <Avatar
                    source={djinnIcons[1]}
                    size={48}
                    onPress={() => {
                        setElement('mars')
                        setTitle('List of Mars Djinni')
                    }}
                />
                <Avatar
                    source={djinnIcons[2]}
                    size={48}
                    onPress={() => {
                        setElement('jupiter')
                        setTitle('List of Jupiter Djinni')
                    }}
                />
                <Avatar
                    source={djinnIcons[3]}
                    size={48}
                    onPress={() => {
                        setElement('mercury')
                        setTitle('List of Mercury Djinni')
                    }}
                />
                {
                    name !== 'goldensun' && (
                        <Avatar
                            source={djinnIcons[4]}
                            size={48}
                            onPress={() => {
                                setElement('summon')
                                setTitle('List of Summons')
                            }}
                        />
                    )
                }
            </View>
            
            <Text style={{
                backgroundColor: '#ffffff00',
                fontSize: 36,
                margin: 4,
                textAlign: 'center'
            }}>
                {title}
            </Text>
            <FlatList
                nestedScrollEnabled
                data={djinn.filter((djinni) => djinni.element === element)}
                renderItem={DjinnListItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    )
}

export default DjinnListScreen;