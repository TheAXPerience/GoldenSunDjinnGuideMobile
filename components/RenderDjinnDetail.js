import { useState } from "react";
import { ScrollView, Text, Image } from "react-native";
import { Avatar, Card, CheckBox, ListItem } from "react-native-elements";
import { retrieveLogo, retrieveSprite } from "../shared/djinnimages";

const RenderDjinnInfo = ({ djinni, game }) => {
    const [checked, setChecked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const pressCheck = () => {
        setChecked(!checked);
    }

    return (
        <Card
            containerStyle={{
                marginTop: 5,
                marginBottom: 5
            }}
        >
            <ListItem.Accordion
                content={
                    <ListItem.Content style={{alignItems: 'center', flex: 2}}>
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
                        size={48}
                        source={retrieveSprite(game, djinni.image)}
                    />
                    <ListItem.Subtitle style={{ fontSize: 14 }}>
                        {'"' + djinni.blurb + '"'}
                    </ListItem.Subtitle>
                    <ListItem.Title style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Location: {djinni.location}
                    </ListItem.Title>
                    <Text style={{ fontSize: 16}}>{djinni.description}</Text>
                </ListItem.Content>
            </ListItem.Accordion>
            <CheckBox
                center
                checked={checked}
                onPress={() => pressCheck()}
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
