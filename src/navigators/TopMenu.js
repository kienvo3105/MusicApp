import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

import Song from '../screens/Song';
import Suggested from '../screens/Suggested';
import Album from '../screens/Album';
import Artist from '../screens/Artist';
import SearchBar from '../components/SearchBar';
import { color } from '../constants/color';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

const TopMenu = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar></StatusBar>

            <SearchBar title={"mymusic"} />

            <Tab.Navigator
                initialRouteName="Bài hát"
                screenOptions={{
                    tabBarActiveTintColor: color.primary,
                    tabBarInactiveTintColor: "#ccc",
                    tabBarLabelStyle: styles.label,
                    tabBarIndicatorStyle: styles.indicator,
                    tabBarPressColor: "white",
                }}
            >
                <Tab.Screen name="Khám phá" component={Suggested} />
                <Tab.Screen name="Bài hát" component={Song} />
                <Tab.Screen name="Ca sĩ" component={Artist} />
                <Tab.Screen name="Albums" component={Album} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default TopMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        textTransform: "none",
    },
    indicator: { backgroundColor: color.primary, height: 3, borderRadius: 25 },
});