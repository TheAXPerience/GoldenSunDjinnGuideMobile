import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, Image } from "react-native";
import { Avatar, Card, CheckBox, ListItem } from "react-native-elements";
import { retrieveLogo, retrieveSprite } from "../shared/djinnimages";
import { toggleChecked } from "../features/checked/checkedSlice";

const RenderDjinnInfo = ({ djinni, game }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const checkedDjinn = useSelector((state) => state.checked);
    const dispatch = useDispatch();

    return (
        <Card
            containerStyle={{
                marginTop: 5,
                marginBottom: 5
            }}
        >
            <ListItem.Accordion
                content={
                    <ListItem.Content
                        style={{ alignItems: 'center', flex: 2 }}
                    >
                        <Image
                            source={retrieveLogo(game)}
                            resizeMode="contain"
                            style={{ height: 80 }}
                        />
                    </ListItem.Content>
                }
                isExpanded={isExpanded}
                onPress={() => setIsExpanded(!isExpanded)}
            >
                <Card.Divider />
                <ListItem.Content style={{alignItems: 'center'}}>
                    <Avatar
                        size={56}
                        source={retrieveSprite(game, djinni.image)}
                        containerStyle={{ marginVertical: 4 }}
                    />
                    <ListItem.Subtitle style={{ fontSize: 14 }}>
                        {'"' + djinni.blurb + '"'}
                    </ListItem.Subtitle>
                    <ListItem.Title style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginVertical: 5
                    }}>
                        Location: {djinni.location}
                    </ListItem.Title>
                    <Text style={{ fontSize: 16, marginVertical: 5 }}>
                        {djinni.description}
                    </Text>
                </ListItem.Content>
            </ListItem.Accordion>
            <CheckBox
                center
                checked={checkedDjinn.includes(djinni.id)}
                onPress={() => dispatch(toggleChecked(djinni.id))}
                title='Click to mark as obtained'
                iconRight
            />
        </Card>
    );
}

const RenderDjinnDetail = ({ djinni }) => {
    return (
        <ScrollView>
            {djinni.goldensun && <RenderDjinnInfo djinni={djinni.goldensun} game='goldensun' />}
            {djinni.lostage && <RenderDjinnInfo djinni={djinni.lostage} game='lostage' />}
            {djinni.darkdawn && <RenderDjinnInfo djinni={djinni.darkdawn} game='darkdawn' />}
        </ScrollView>
    );
}

export default RenderDjinnDetail;
