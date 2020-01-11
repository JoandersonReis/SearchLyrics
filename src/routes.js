import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import Main from "./pages/Main"
import Lyric from "./pages/Lyric"

const StackNavigator = createStackNavigator({
    Main: {
        screen: Main
    },
    Lyric: {
        screen: Lyric
    }
})

export default createAppContainer(StackNavigator)
