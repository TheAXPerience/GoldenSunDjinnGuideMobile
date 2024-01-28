import { FlatList, View } from "react-native";
import { Avatar, CheckBox, Icon, ListItem } from "react-native-elements";
import { retrieveSprite } from "../shared/djinnimages";
import { toggleChecked } from "../features/checked/checkedSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const chaptersByGame = {
    goldensun: [
        { id: 1, name: 'Northern Angara', iconType: 'material', iconName: 'looks-one' },
        { id: 2, name: 'Eastern Angara', iconType: 'material', iconName: 'looks-two' },
        { id: 3, name: 'The Karagol Sea', iconType: 'material', iconName: 'looks-3' },
        { id: 4, name: 'Gondowan', iconType: 'material', iconName: 'looks-4' }
    ],
    lostage: [
        { id: 1, name: 'Indra', iconType: 'material', iconName: 'looks-one' },
        { id: 2, name: 'Osenia', iconType: 'material', iconName: 'looks-two' },
        { id: 3, name: 'Gondowan', iconType: 'material', iconName: 'looks-3' },
        { id: 4, name: 'Great Eastern Sea', iconType: 'material', iconName: 'looks-4' },
        { id: 5, name: 'Great Western Sea', iconType: 'material', iconName: 'looks-5' },
        { id: 6, name: 'Northern Reaches', iconType: 'material', iconName: 'looks-6' },
    ],
    darkdawn: [
        { id: 1, name: 'Goma Plateau', iconType: 'material', iconName: 'looks-one' },
        { id: 2, name: 'Ei-Jei', iconType: 'material', iconName: 'looks-two' },
        { id: 3, name: 'Khiren Mountains', iconType: 'material', iconName: 'looks-3' },
        { id: 4, name: 'Morgal', iconType: 'material', iconName: 'looks-4' },
        { id: 5, name: 'Grave Eclipse', iconType: 'material', iconName: 'looks-5' },
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
                    chaptersByGame[name].map(({id, name, iconType, iconName}) => {
                        return (
                            <Icon
                                type={iconType}
                                name={iconName}
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