import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    labels: {
        marginTop: 30,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    label: {
        fontSize: 30,
        fontWeight: "bold"
    },

    inputs: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    input: {
        fontSize: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        width: "30%"
    },

    searchBtn: {
        marginTop: 100,
        backgroundColor: "#9b59b6",
        padding: 30,
        borderRadius: 5
    },

    searchBtnTxt: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    
    animation: {
        height: 200, 
        width: 200, 
        marginTop: 20, 
        alignSelf: "center"
    },

    // Lyrics
    containerLyrics: {
        flex: 1,
        alignSelf: "center",
        width: "100%",
        padding: 20
    },

    lyrics: {
        fontSize: 17,
        lineHeight: 25,
    }
})

export default styles
