import { Platform, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ChecklistScreen from './ChecklistScreen';
import DjinnListScreen from './DjinnlistScreen';
import ChapterListScreen from './ChapterListScreen';
import DjinnDetailsScreen from './DjinnDetailsScreen';
// import { DJINN_LIST } from "../shared/djinnlist";
import djinnlist from '../shared/djinnlist.json';
import { Image, Icon } from "react-native-elements";

const GoldenSunNavigator = () => {
    const Tabs = createBottomTabNavigator();

    const initialParams = {
        name: 'goldensun',
        djinn: djinnlist.goldensun,
    }

    return (
        <Tabs.Navigator
            initialRouteName="Checklist"
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen
                name='Checklist'
                component={ChecklistScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            type='font-awesome'
                            name='check-square-o'
                            iconStyle={{height: size, width: size, color: color}}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='Djinn List'
                component={DjinnListScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Image
                            source={require('../assets/images/icons/djinni_icon.png')}
                            style={{height: size, width: size, tintColor: color}}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='Chapters'
                component={ChapterListScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            type='entypo'
                            name='book'
                            iconStyle={{height: size, width: size, color: color}}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}

const LostAgeNavigator = () => {
    const Tabs = createBottomTabNavigator();

    const initialParams = {
        name: 'lostage',
        djinn: djinnlist.lostage,
    }

    return (
        <Tabs.Navigator
            initialRouteName="Checklist"
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen
                name='Checklist'
                component={ChecklistScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            type='font-awesome'
                            name='check-square-o'
                            iconStyle={{height: size, width: size, color: color}}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='Djinn List'
                component={DjinnListScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Image
                            source={require('../assets/images/icons/djinni_icon.png')}
                            style={{height: size, width: size, tintColor: color}}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='Chapters'
                component={ChapterListScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            type='entypo'
                            name='book'
                            iconStyle={{height: size, width: size, color: color}}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}

const DarkDawnNavigator = () => {
    const Tabs = createBottomTabNavigator();

    const initialParams = {
        name: 'darkdawn',
        djinn: djinnlist.darkdawn,
    }

    return (
        <Tabs.Navigator
            initialRouteName="Checklist"
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen
                name='Checklist'
                component={ChecklistScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            type='font-awesome'
                            name='check-square-o'
                            iconStyle={{height: size, width: size, color: color}}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='Djinn List'
                component={DjinnListScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Image
                            source={require('../assets/images/icons/djinni_icon.png')}
                            style={{height: size, width: size, tintColor: color}}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='Chapters'
                component={ChapterListScreen}
                initialParams={initialParams}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Icon
                            type='entypo'
                            name='book'
                            iconStyle={{height: size, width: size, color: color}}
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}

const Main = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerTintColor: '#f4d41d', // text color
        headerStyle: {
            backgroundColor: '#6C4023', // background color
        },
        cardStyle: {
            backgroundColor: '#f8f8f8',
        }
    };

    // TODO: dispatch here

    // set up stack navigator
    return (
        <View
            style={{
                flex: 1,
                paddingTop: (Platform.OS === 'ios' ? 0 : Constants.statusBarHeight),
            }}
        >
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name='home'
                    component={HomeScreen}
                    options={(navigation) => ({
                        title: 'Home'
                    })}
                />
                <Stack.Screen
                    name='djinndetails'
                    component={DjinnDetailsScreen}
                    options={({ route }) => ({
                        title: route.params.djinniName
                    })}
                />
                <Stack.Screen
                    name='goldensun'
                    component={GoldenSunNavigator}
                    options={(navigation) => ({
                        title: 'Golden Sun'
                    })}
                />
                <Stack.Screen
                    name='lostage'
                    component={LostAgeNavigator}
                    options={(navigation) => ({
                        title: 'Golden Sun: The Lost Age'
                    })}
                />
                <Stack.Screen
                    name='darkdawn'
                    component={DarkDawnNavigator}
                    options={(navigation) => ({
                        title: 'Golden Sun: Dark Dawn'
                    })}
                />
            </Stack.Navigator>
        </View>
    );
}

export default Main;
