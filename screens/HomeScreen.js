import { ScrollView } from "react-native"
import { Tile } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Tile
                imageSrc={require('../assets/images/goldensun_boxart.jpg')}
                onPress={() => navigation.navigate('goldensun')}
                title='Golden Sun'
                caption='Isaac and friends journey on a quest to avert the lighting of the Elemental Lighthouses and to save their friends.'
                titleStyle={{ padding: 4, backgroundColor: '#00000090', borderRadius: 4 }}
                captionStyle={{ padding: 4, backgroundColor: '#00000090', borderRadius: 4 }}
                featured
            />
            <Tile
                imageSrc={require('../assets/images/lostage_boxart.jpg')}
                onPress={() => navigation.navigate('lostage')}
                title='Golden Sun: The Lost Age'
                caption="Felix and friends journey on a quest to light the remaining Elemental Lighthouses and avert the world's fate."
                featured
                titleStyle={{ padding: 4, backgroundColor: '#00000090', borderRadius: 4 }}
                captionStyle={{ padding: 4, backgroundColor: '#00000090', borderRadius: 4 }}
            />
            <Tile
                imageSrc={require('../assets/images/darkdawn_boxart.jpg')}
                onPress={() => navigation.navigate('darkdawn')}
                title='Golden Sun: Dark Dawn'
                caption='Matthew and friends journey on a quest to fix a broken invention and foil a world-ending plot.'
                featured
                titleStyle={{ padding: 4, backgroundColor: '#00000090', borderRadius: 4 }}
                captionStyle={{ padding: 4, backgroundColor: '#00000090', borderRadius: 4 }}
            />
        </ScrollView>
    )
}

export default HomeScreen;