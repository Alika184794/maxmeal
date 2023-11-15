import { View, Text, ScrollView, ImageBackground, TouchableOpacity ,Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcomebg from '../assets/welcome.png'
import { LinearGradient } from 'expo-linear-gradient' 
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function AddressScreen() {
  const navigator =useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
    <ScrollView showsVerticalScrollIndicator={false} className="h-screen">
          
          
    

          <View 
          className="flex-col px-[35px] translate-y-[50px] h-screen">
             
            <View className="flex-row justify-between   items-center w-[200px] mb-[50px] ">
             <TouchableOpacity  onPress={()=>navigator.navigate("Review")} className=" flex-row justify-center items-center   w-[52px] h-[52px] 
                  rounded-md shadow shadow-lg">
              <Ionicons  className=" flex-row justify-center items-center" 
               name="chevron-back" size={28} color="black" />
              </TouchableOpacity>
              <Text className="text-fade  font-center ">Add New Address </Text> 
              
            </View>
             

            <View className="mb-8">
              <Text className="text-fade">Full Name </Text> 
              <TextInput placeholder="Your Email or phone" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
            </View>

            <View className="mb-8">
              <Text className="text-fade">Mobile Number </Text> 
              <TextInput placeholder="Your Email or phone" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
            </View>
            
            

            <View className="mb-8">
              <Text className="text-fade">State  </Text> 
              <TextInput placeholder="Password" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
            </View> 

            <View className="mb-8">
              <Text className="text-fade">City </Text> 
              <TextInput placeholder="Your Email or phone" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
            </View>

            <View className="mb-8">
              <Text className="text-fade">Street(Include house Number) </Text> 
              <TextInput placeholder="Your Email or phone" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
            </View>


          

            <View className="flex-row justify-between   items-center w-full mb-[12px]" > 
            <TouchableOpacity onPress={()=>navigator.replace("Main")} className="  flex-row justify-center items-center w-full h-[65px]   bg-primary  rounded-full border-[1px]   border-white ">
               <Text className="text-white opacity-90 ">Save</Text>
            </TouchableOpacity  > 
             </View>

            

            

          </View>
       
    </ScrollView>
  </SafeAreaView>
  )
}