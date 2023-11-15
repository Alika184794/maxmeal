import { View, Text, ScrollView, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Food1 from '../assets/food1.png'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default function CartScreen() {
  const navigator = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="h-screen">




        <View
          className="flex-col px-[35px] translate-y-[50px] h-screen">

          <View className="flex-row justify-between   items-center w-[200px] mb-[20px] ">
            <TouchableOpacity onPress={() => navigator.navigate("Review")} className=" flex-row justify-center items-center   w-[52px] h-[52px] 
                  rounded-md shadow shadow-lg">
              <Ionicons className=" flex-row justify-center items-center"
                name="chevron-back" size={28} color="black" />
            </TouchableOpacity>
            <Text className="text-fade  text-[22px] font-center "> Cart </Text>

          </View>



          <View  className=" flex-row justify-center items-center   mb-[20px]    h-[140px] 
                  rounded-md shadow shadow-lg">
          <View className="flex-row justify-between  gap-[5px] items-center   ">

            <Image source={Food1} className="w-[100px] h-[100px]  rounded-md " />

            <View className="">
              <Text className="text-dark  font-bold	 text-[15px] mb-4 ">Red n hot pizza</Text>
              <Text className="text-fade  text-[10px]  mb-4">Spicy chicken, beef</Text>
              <Text className="text-primary text-[20px] ">$15.30</Text>
            </View>

            <View className="flex-col items-end justify-between">
              <Text className="text-primary  font-bold	 text-[15px] mb-4 ">x</Text>
              <Text className="text-fade  text-[10px]  mb-4"> </Text> 
              
              
              <View className='flex-row gap-[10px] items-center'>
                                                                 
                                    
                                    <Text className="text-primary text-[20px] ">
                                      <AntDesign name="minuscircle" size={24} color="#FE724C" />
                                    </Text> 
                                    <Text style={{ fontFamily: "SofiaLight" }} >2</Text>
                                    <Text className="text-primary text-[20px] ">
                                      <AntDesign name="pluscircle" size={24} color="#FE724C" />
                                    </Text> 
                                    
                                     
                                </View>
            
            </View>

            




          </View>
          </View>




          <View className="flex-row justify-between   items-center w-full mb-[12px]" >
            <TouchableOpacity onPress={() => navigator.replace("Favourite")} className="  flex-row justify-center items-center w-full h-[65px]   bg-primary  rounded-full border-[1px]   border-white ">
              <Text className="text-white opacity-90 ">Save</Text>
            </TouchableOpacity  >
          </View>





        </View>

      </ScrollView>
    </SafeAreaView>
  )
}