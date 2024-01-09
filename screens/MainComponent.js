import { Platform, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ChecklistScreen from './ChecklistScreen';
import DjinnListScreen from './DjinnlistScreen';
import ChapterListScreen from './ChapterListScreen';
import DjinnDetailsScreen from './DjinnDetailsScreen';

const GoldenSunNavigator = () => {
    const Tabs = createBottomTabNavigator();

    const initialParams = {
        name: 'Golden Sun'
    }

    return (
        <Tabs.Navigator
            initialRouteName="Checklist"
        >
            <Tabs.Screen
                name='Checklist'
                component={ChecklistScreen}
                initialParams={initialParams}
            />
            <Tabs.Screen
                name='Djinn List'
                component={DjinnListScreen}
                initialParams={initialParams}
            />
            <Tabs.Screen
                name='Chapters'
                component={ChapterListScreen}
                initialParams={initialParams}
            />
        </Tabs.Navigator>
    );
}

const LostAgeNavigator = () => {
    const Tabs = createBottomTabNavigator();

    const initialParams = {
        name: 'Golden Sun: The Lost Age'
    }

    return (
        <Tabs.Navigator
            initialRouteName="Checklist"
        >
            <Tabs.Screen
                name='Checklist'
                component={ChecklistScreen}
                initialParams={initialParams}
            />
            <Tabs.Screen
                name='Djinn List'
                component={DjinnListScreen}
                initialParams={initialParams}
            />
            <Tabs.Screen
                name='Chapters'
                component={ChapterListScreen}
                initialParams={initialParams}
            />
        </Tabs.Navigator>
    );
}

const DarkDawnNavigator = () => {
    const Tabs = createBottomTabNavigator();

    const initialParams = {
        name: 'Golden Sun: Dark Dawn'
    }

    return (
        <Tabs.Navigator
            initialRouteName="Checklist"
        >
            <Tabs.Screen
                name='Checklist'
                component={ChecklistScreen}
                initialParams={initialParams}
            />
            <Tabs.Screen
                name='Djinn List'
                component={DjinnListScreen}
                initialParams={initialParams}
            />
            <Tabs.Screen
                name='Chapters'
                component={ChapterListScreen}
                initialParams={initialParams}
            />
        </Tabs.Navigator>
    );
}

const Main = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerTintColor: '#FFFFFF', // text color
        headerStyle: {
            backgroundColor: '#DDCD48' // background color
        }
    };

    // TODO: dispatch here

    // set up stack navigator
    return (
        <View style={{ flex: 1, paddingTop: (Platform.OS === 'ios' ? 0 : Constants.statusBarHeight) }}>
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
                    options={({ route} ) => ({
                        title: route.params.djinn.name
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
