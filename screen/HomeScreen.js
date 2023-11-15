import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'

import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { meals } from '../config/db'
import Bars from '../component/Bars'






export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white mt-[15px]">
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} className="h-screen">

 <View  className=" flex-row   rounded-md h-[200px] rounded-md">
        <Carousel 
          data={meals}
          containerCustomStyle={{ overflow: 'visible' }}
          renderItem={({ item }) => <Bars item={item} />}
          sliderWidth={400}
          slideStyle={{ display: "flex", alignItems: "center" }}
          itemWidth={400}
        />

</View>
      </ScrollView>
    </SafeAreaView>

  )
}