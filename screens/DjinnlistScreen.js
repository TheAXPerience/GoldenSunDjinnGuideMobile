import { FlatList, View } from "react-native";
import { Avatar, CheckBox, ListItem } from "react-native-elements";
import { retrieveSprite } from '../shared/djinnimages';
import { useState } from "react";

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
                    source={retrieveSprite('goldensun', 'venus')}
                    size={48}
                    onPress={() => setElement('venus')}
                />
                <Avatar
                    source={retrieveSprite('goldensun', 'mars')}
                    size={48}
                    onPress={() => setElement('mars')}
                />
                <Avatar
                    source={retrieveSprite('goldensun', 'jupiter')}
                    size={48}
                    onPress={() => setElement('jupiter')}
                />
                <Avatar
                    source={retrieveSprite('goldensun', 'mercury')}
                    size={48}
                    onPress={() => setElement('mercury')}
                />
                {
                    name !== 'goldensun' && (
                        <Avatar
                            source={retrieveSprite('lostage', 'zagan')}
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