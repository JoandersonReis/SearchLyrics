// Libs React
import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import Lottie from "lottie-react-native"

// Files
import loading from "../animation/loading.json"
import api from "../services/api"
import styles from "../styles/styles"

// Class Main
export default class Main extends Component {
    // Config navigation bar
    static navigationOptions = {
        title: "Search Lyrics",
        headerStyle: {
            backgroundColor: "#9b59b6"
        },
        headerTintColor: "#FFF",
        headerTitleAlign: "center"
    }

    // Method state
    state = {
        artist: "",
        song: "",
        lyrics: "",
        status: false
    }

    // Async function to load the Lyrics 
    loadLyrics = async (artist, song) => {
        try {
            const response = await api.get(`${artist}/${song}`)
    
            const data = response.data
            
            this.setState({ lyrics: data.lyrics })
        } catch(err) {
            if(err.message == "Request failed with status code 404") {
                this.setState({ lyrics: "Lyrics not found" })
            }
        }

        setTimeout(() => this.setState({ status: false }), 2000)
    }

    // Function to load loading animation
    loadAnimation = () => {
        if(this.state.status == true) {
            return (
                <View style={styles.animation}>
                    <Lottie 
                        source = {loading}
                        resizeMode = "contain"
                        autoSize
                        autoPlay
                        loop
                    />
                </View>
            )
        } else {
            return
        }
    }


    render() {
        return (
            // Main View
            <View style={styles.container}>
                <View style={styles.labels}>
                    <Text style={styles.label}>Artist</Text>
                    <Text style={styles.label}>Song</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        placeholder = "Artist"
                        onChangeText = {(artist) => this.setState({ artist })}
                    />

                    <TextInput
                        style={styles.input} 
                        placeholder = "Song"
                        onChangeText = {(song) => this.setState({ song })}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.searchBtn}
                    onPress = {() => {
                        const artist = this.state.artist
                        const song = this.state.song

                        this.loadLyrics(artist, song)

                        this.setState({ status: true})

                        setTimeout(() => {
                            this.props.navigation.navigate("Lyric", { lyrics: this.state.lyrics })
                        }, 3000)
                    }}
                ><Text style={styles.searchBtnTxt}>Search</Text></TouchableOpacity>

                {this.loadAnimation()}
            </View>
        )
    }
}
