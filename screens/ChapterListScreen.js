import { FlatList, View } from "react-native";
import { Avatar, CheckBox, ListItem } from "react-native-elements";
import { retrieveSprite } from '../shared/djinnimages';
import { CHAPTERS_LIST } from "../shared/djinnlist";
import { useState } from "react";

const chapterNumberIcons = [
    require('../assets/images/icons/one.png'),
    require('../assets/images/icons/two.png'),
    require('../assets/images/icons/three.png'),
    require('../assets/images/icons/four.png'),
    require('../assets/images/icons/five.png'),
    require('../assets/images/icons/six.png'),
]

const ChapterListScreen = ({ route, navigation }) => {
    const { name, djinn } = route.params;
    const [chapter, setChapter] = useState(1);

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
                {
                    CHAPTERS_LIST[name].map((chapter) => {
                        return (
                            <Avatar
                                source={chapterNumberIcons[chapter-1]}
                                size={48}
                                onPress={() => setChapter(chapter)}
                                rounded
                            />
                        );
                    })
                }
            </View>
            
            <FlatList
                nestedScrollEnabled
                data={djinn.filter((djinni) => djinni.chapter === chapter)}
                renderItem={renderDjinniListItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    )
}

export default ChapterListScreen;