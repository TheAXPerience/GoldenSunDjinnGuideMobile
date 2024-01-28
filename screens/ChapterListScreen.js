import { FlatList, View } from "react-native";
import { Avatar, CheckBox, ListItem } from "react-native-elements";
import { retrieveSprite } from "../shared/djinnimages";
import { toggleChecked } from "../features/checked/checkedSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const chaptersByGame = {
    goldensun: [
        { id: 1, name: 'Northern Angara' },
        { id: 2, name: 'Eastern Angara' },
        { id: 3, name: 'The Karagol Sea' },
        { id: 4, name: 'Gondowan' }
    ],
    lostage: [
        { id: 1, name: 'Indra' },
        { id: 2, name: 'Osenia' },
        { id: 3, name: 'Gondowan' },
        { id: 4, name: 'Great Eastern Sea' },
        { id: 5, name: 'Great Western Sea' },
        { id: 6, name: 'Northern Reaches' },
    ],
    darkdawn: [
        { id: 1, name: 'Goma Plateau' },
        { id: 2, name: 'Ei-Jei' },
        { id: 3, name: 'Khiren Mountains' },
        { id: 4, name: 'Morgal' },
        { id: 5, name: 'Grave Eclipse' },
    ]
}

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
                    padding: 10,
                    columnGap: 5
                }}
            >
                {
                    chaptersByGame[name].map(({id, name}) => {
                        return (
                            <Avatar
                                source={chapterNumberIcons[id-1]}
                                size={48}
                                onPress={() => setChapter(id)}
                                rounded
                                key={id}
                            />
                        );
                    })
                }
            </View>
            
            <FlatList
                nestedScrollEnabled
                data={djinn.filter((djinni) => djinni.chapter === chapter)}
                renderItem={DjinnListItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    )
}

export default ChapterListScreen;