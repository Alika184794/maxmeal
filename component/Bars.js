
import { ScrollView,  View, TouchableOpacity, Text, TextInput ,ImageBackground, Image } from 'react-native';
import React from 'react'

export default function Bars({item}) {
  return (
    <TouchableOpacity className={`rounded-br-full rounded-bl-full  rounded-tl-full rounded-tr-full h-[150px] bg-white flex-col justify-around items-center gap-[5px]`}>
    <View className={`w-[80px] h-[80px] rounded-full`}>
         <Image source={item.image} className='shadow-lg w-full resize-contain rounded-full'/>
    </View>
    <Text className='text-dark pb-[15px]'>{ item.name}</Text>
</TouchableOpacity>
  )
}