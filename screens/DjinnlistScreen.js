import { FlatList, View } from "react-native";
import { Avatar, CheckBox, ListItem } from "react-native-elements";
import { retrieveSprite } from '../shared/djinnimages';
import { useState } from "react";

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
        <>
            <View
                style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    margin: 15,
                    columnGap: 5
                }}
            >
                <Avatar
                    source={djinnIcons[0]}
                    size={48}
                    onPress={() => setElement('venus')}
                />
                <Avatar
                    source={djinnIcons[1]}
                    size={48}
                    onPress={() => setElement('mars')}
                />
                <Avatar
                    source={djinnIcons[2]}
                    size={48}
                    onPress={() => setElement('jupiter')}
                />
                <Avatar
                    source={djinnIcons[3]}
                    size={48}
                    onPress={() => setElement('mercury')}
                />
                {
                    name !== 'goldensun' && (
                        <Avatar
                            source={djinnIcons[4]}
                            size={48}
                            onPress={() => setElement('summon')}
                        />
                    )
                }
            </View>
            
            <FlatList
                nestedScrollEnabled
                data={djinn.filter((djinni) => djinni.element === element)}
                renderItem={renderDjinniListItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    )
}

export default DjinnListScreen;