import { useState } from "react";
import { ScrollView, Text, Image } from "react-native";
import { Avatar, Card, CheckBox, ListItem } from "react-native-elements";
import { retrieveLogo, retrieveSprite } from "../shared/djinnimages";

const RenderDjinnInfo = ({ djinni, game }) => {
    const [checked, setChecked] = useState(false);

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
            <Image
                style={{ resizeMode: 'contain', height: 80, width: 'auto' }}
                source={retrieveLogo(game)}
            />
            <Card.Divider />
            <ListItem>
                <Avatar
                    size={48}
                    source={retrieveSprite(game, djinni.image)}
                />
                <ListItem.Content>
                    <ListItem.Subtitle style={{ fontSize: 14 }}>
                        {'"' + djinni.blurb + '"'}
                    </ListItem.Subtitle>
                    <ListItem.Title style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Location: {djinni.location}
                    </ListItem.Title>
                    <Text style={{ fontSize: 16}}>{djinni.description}</Text>
                </ListItem.Content>
            </ListItem>
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
