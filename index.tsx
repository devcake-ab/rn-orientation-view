import React, { FC, ReactNode } from 'react'
import { View, Animated, ViewStyle, useWindowDimensions } from 'react-native'

interface OrientationViewProps {
  landscapeStyles?: ViewStyle
  portraitStyles?: ViewStyle
  style?: ViewStyle
  isAnimated?: boolean
  children?: ReactNode
}

const OrientationView: FC<OrientationViewProps> = ({
  landscapeStyles,
  portraitStyles,
  style,
  isAnimated,
  children,
}) => {
  const { width, height } = useWindowDimensions()

  const isLandscape = width > height

  const renderView = () => {
    const ViewComponent = isAnimated ? Animated.View : View
    return (
      <ViewComponent style={[ style, isLandscape ? landscapeStyles : portraitStyles ]}>
        {children}
      </ViewComponent>
    )
  }

  return renderView()
}

export default OrientationView
