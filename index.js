import React, { useState } from 'react'
import { View, Dimensions, Animated } from 'react-native'

const OrientationView = props => {
    const [screenOrientation, setScreenOrientation] = useState(Dimensions.get('window'))

    const getOrientation = () => {
        if (screenOrientation.width > screenOrientation.height) {
            return 'LANDSCAPE'
        } else {
            return 'PORTRAIT'
        }
    }

    const getStyles = () => {
        if (getOrientation() === 'LANDSCAPE') {
            return props.landscapeStyles
        } else {
            return props.portraitStyles
        }
    }

    const onLayout = () => {
        setScreenOrientation(Dimensions.get('window'))
    }

    const renderView = () => {
        if (props.isAnimated) {
            return (
                <Animated.View onLayout={() => onLayout()} style={{ ...props.style, ...getStyles() }}>
                    {props.children}
                </Animated.View>
            )
        } else {
            return (
                <View onLayout={() => onLayout()} style={{ ...props.style, ...getStyles() }}>
                    {props.children}
                </View>
            )
        }
    }

    return renderView()
}

export default OrientationView
