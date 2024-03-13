import React, { useState, FunctionComponent } from 'react'
import { View, Dimensions, Animated, ViewStyle } from 'react-native'

interface OrientationViewProps {
  landscapeStyles?: ViewStyle
  portraitStyles?: ViewStyle
  style?: ViewStyle
  isAnimated?: boolean
  children?: React.ReactNode
}

interface ScreenSize {
  width: number
  height: number
}

const OrientationView: FunctionComponent<OrientationViewProps> = (props) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(Dimensions.get('window'))

  const getOrientation = () => {
    return screenSize.width > screenSize.height ? 'LANDSCAPE' : 'PORTRAIT'
  }

  const getStyles = () => {
    return getOrientation() === 'LANDSCAPE' ? props.landscapeStyles : props.portraitStyles
  }

  const onLayout = () => {
    setScreenSize(Dimensions.get('window'))
  }

  const renderView = () => {
    const ViewComponent = props.isAnimated ? Animated.View : View
    return (
      <ViewComponent onLayout={() => onLayout()} style={{ ...props.style, ...getStyles() }}>
        {props.children}
      </ViewComponent>
    )
  }

  return renderView()
}

export default OrientationView
