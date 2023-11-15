import { View, Text, ScrollView, ImageBackground, TouchableOpacity ,Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcomebg from '../assets/welcome.png'
import { LinearGradient } from 'expo-linear-gradient'
import Fbimg from '../assets/fbimg.png'
import Goimg from '../assets/goimg.png'
import { useNavigation } from '@react-navigation/native'
export default function Welcome() {
  const navigator=useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="h-screen">
            <View className="flex-col px-[35px] translate-y-[150px] h-screen">
              <View className="mb-8">
                <Text className="text-dark   text-[40px]">Login  </Text> 
              </View>
              <View>

               

              <View className="mb-8">
                <Text className="text-fade">E-mail  </Text> 
                <TextInput placeholder="Your Email or phone" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
              </View>

              <View className="mb-8">
                <Text className="text-fade">Password  </Text> 
                <TextInput placeholder="Password" className="w-full flex-row justify-center items-center   p-2 w-full  opacity-40    rounded-md border-[1px]   border-primary" />
              </View> 
              </View>


              <View>
              <TouchableOpacity onPress={()=>navigator.navigate("Forget")} className="mb-4  flex-row justify-center items-center     ">
                 <Text className="text-primary opacity-90 ">Forget Password?</Text>
              </TouchableOpacity  >
               
               </View>

              <View className="flex-row justify-between   items-center w-full mb-[12px]" > 
              <TouchableOpacity onPress={()=>navigator.navigate("Forget")} className="  flex-row justify-center items-center w-full h-[65px]   bg-primary  rounded-full border-[1px]   border-white ">
                 <Text className="text-white opacity-90 ">Login</Text>
              </TouchableOpacity  > 
               </View>

              <View className="flex-row gap-[2px] justify-center items-center w-full  " > 
              <Text className=" opacity-90 mb-9"> Don't have an account?</Text>
              <TouchableOpacity onPress={()=>navigator.navigate("Signup")} className="flex-row  justify-center items-center         ">
                <Text className="mb-9 text-primary">Sign up</Text>  

              </TouchableOpacity  > 

              
               </View>

              <View className="flex-col   justify-center items-center">
                <View className="flex-row items-center mb-[5px]">
                  <View className="border-b-[1px] mb-[8px]  border-dark w-[110px]" />
                  <Text className="text-dark  mb-[8px] text-[15px] "> sign up with   </Text>
                  <View className="border-b-[1px] mb-[8px]  border-dark w-[110px]" />
                </View>
                
                <View className=" flex-row justify-between   items-center w-[200px] mb-[50px]" >

                  <TouchableOpacity className="flex-row shadow shadow-lg items-center w-[160px] h-[65px] -translate-x-20 bg-white p-6 rounded-full">
                    <Image source={Fbimg} className="w-[40px] h-[40px]" />
                    <Text>Facebook</Text>
                  </TouchableOpacity  >
                  
                  <TouchableOpacity className="flex-row shadow shadow-lg items-center w-[160px] h-[65px] -translate-x-10 bg-white p-6 rounded-full">
                    <Image source={Goimg} className="w-[35px] h-[35px]" />
                    <Text>Google</Text>
                  </TouchableOpacity  > 
                  

                </View>

               

               
                
              </View>

            </View>
         
      </ScrollView>
    </SafeAreaView>
  )
}