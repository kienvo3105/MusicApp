import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const SearchBar = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.searchBar}>
            {/* title */}
            <View style={styles.container}>
                <FontAwesome5 name="music" size={24} color="#ff8216" />
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
            </View>
            {/* search button */}

            <TouchableOpacity
                onPress={() => {
                    // navigation.navigate("Search");
                }}
            >
                <Icon name="search" size={24}></Icon>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "white",
        height: 60,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        paddingLeft: 20,
        fontSize: 27,
        fontWeight: "bold",
    },
});
