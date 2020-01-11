import React, { Component } from "react"
import { ScrollView, Text } from "react-native"
import styles from "../styles/styles"

export default class Lyric extends Component {
    // Config navigation bar
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.song,
        headerStyle: {
            backgroundColor: "#9b59b6"
        },
        headerTintColor: "#FFF",
        headerTitleAlign: "center"
    })
    
    render() {
        // Get the parameter from the main
        const lyrics = this.props.navigation.getParam("lyrics")

        return (
            // ScrollView with Lyrics
            <ScrollView style={styles.containerLyrics}>
                <Text style={styles.lyrics}>{lyrics}</Text>
            </ScrollView>
        )
    }
}
