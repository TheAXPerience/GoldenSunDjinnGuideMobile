import { Text, ScrollView } from "react-native"
import { Button, Tile } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Tile
                onPress={() => navigation.navigate('goldensun')}
                title='Golden Sun'
                caption='Isaac and friends journey on a quest to avert the lighting of the Elemental Lighthouses and to save their friends.'
                featured
            />
            <Tile
                onPress={() => navigation.navigate('lostage')}
                title='Golden Sun: The Lost Age'
                caption="Felix and friends journey on a quest to light the remaining Elemental Lighthouses and avert the world's fate."
                featured
            />
            <Tile
                onPress={() => navigation.navigate('darkdawn')}
                title='Golden Sun: Dark Dawn'
                caption='Matthew and friends journey on a quest to fix a broken invention and foil a world-ending plot.'
                featured
            />
        </ScrollView>
    )
}

export default HomeScreen;