import { View, Text } from 'react-native'
import React from 'react'

export default function Slider() {
  return (
    <Carousel
    ref={(c) => { this._carousel = c; }}
    data={this.state.entries}
    renderItem={this._renderItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
  />
  )
}