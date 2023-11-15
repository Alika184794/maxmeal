import { View, Text, ScrollView, ImageBackground, TouchableOpacity ,Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import ph from '../assets/ph.png'

import Staron from '../assets/staron.png'
import Pbg from '../assets/pbg.png'
import Face from '../assets/face.png'
import { LinearGradient } from 'expo-linear-gradient'

export default function ReviewScreen() {
  const navigator =useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
    <View showsVerticalScrollIndicator={false} className="h-screen">
          
          
    <ImageBackground source={Pbg} className="h-[290px] w-[420px]">
              
    <View className="flex-row justify-between  items-center w-[200px] ">
             <TouchableOpacity  onPress={()=>navigator.navigate("Cart")} className=" translate-x-4 translate-y-20 bg-white flex-row justify-center  rounded-full items-center   w-[40px] h-[42px] 
                  rounded-md shadow shadow-lg">
              <Ionicons  className=" flex-row justify-center items-center" 
               name="chevron-back" size={28} color="black" />
              </TouchableOpacity>
              <Text className="text-fade  font-center ">  </Text> 
              
            </View>

          
       </ImageBackground>

       <View 
          className="flex-col px-[35px] -translate-y-[200px] h-screen">
           
             

            <View className="mb-1 items-center text-center">
            <TouchableOpacity className="flex-row items-center  w-[200px] h-[200px] bg-white    rounded-full shadow shadow-lg  ">
                    <Image source={Face}  className="w-[200px] h-[200px]     "  />
            </TouchableOpacity  > 
            </View>

            <View className="mb-10 ">
            <Text className="text-fade font-center text-center text-[20px]  ">  Chris Nathan </Text> 
             
            <Text className="text-fade font-center text-center text-[12px]  ">  Edit Profile </Text> 
             
            </View>
 

            <View className="mb-10">
                <Text className="text-fade">Full name </Text> 
                <TextInput placeholder="Chris Nathan" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
              </View> 

            <View className="mb-10">
                <Text className="text-fade">Email  </Text> 
                <TextInput placeholder="mail@aitech.com" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
              </View>  

            <View className="mb-20">
                <Text className="text-fade">Phone Number  </Text> 
                <TextInput placeholder="+1 (783) 0986 8786" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
              </View>  


           
           
           
            
               


          

            <View className="flex-row justify-between   items-center w-full " > 
            <TouchableOpacity onPress={()=>navigator.replace("Main")} className="  flex-row justify-center items-center w-full h-[65px]   bg-primary  rounded-full border-[1px]   border-white ">
               <Text className="text-white opacity-90 ">SUBMIT</Text>
            </TouchableOpacity  > 
             </View>

            

            

          </View>
    </View>
  </SafeAreaView>
  )
}