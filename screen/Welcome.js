import { View, Text, ScrollView, ImageBackground, TouchableOpacity ,Image} from 'react-native'
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
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={Welcomebg} className="h-screen">
          <LinearGradient className="h-screen px-[35px] opacity-90" colors={['white', '#000']}>
            <View className="flex-col   translate-y-[150px]">
              <View className="">
                <Text className="text-dark   text-[50px]">Welcome to  </Text>
                <Text className="text-primary text-[50px]">Maxmeal</Text>

                <View className=" ">
                <Text className="text-dark  text-[13px]  ">Your favourite foods delivered </Text>
                <Text  className="text-dark text-[13px]  "> fast at your door.</Text>
                </View>
              </View>


              <View className="flex-col  translate-y-[260px] justify-center items-center">
                <View className="flex-row items-center mb-[5px]">
                  <View className="border-b-[1px] mb-[8px] border-white w-[110px]" />
                  <Text className="text-white  mb-[8px] text-[15px] "> sign in with   </Text>
                  <View className="border-b-[1px] mb-[8px]  border-white w-[110px]" />
                </View>
                
                <View className=" flex-row justify-between   items-center w-[200px] mb-[50px]" >


               <TouchableOpacity className="flex-row items-center w-[160px] h-[65px] -translate-x-20 bg-white p-6 rounded-full">
                    <Image source={Fbimg} className="w-[40px] h-[40px]" />
                    <Text>Facebook</Text>
                  </TouchableOpacity  >
                  
                  <TouchableOpacity className="flex-row items-center w-[160px] h-[65px] -translate-x-10 bg-white p-6 rounded-full">
                    <Image source={Goimg} className="w-[35px] h-[35px]" />
                    <Text>Google</Text>
                  </TouchableOpacity  >  
                </View>

                <View className="flex-row justify-between   items-center w-full mb-[12px]" > 
              <TouchableOpacity onPress={()=>navigator.navigate("Signup")} className="flex-row justify-center items-center w-full h-[65px] opacity-40  bg-white  rounded-full border-[1px]   border-white ">
                 <Text className="text-white opacity-90 ">Start with email or phone</Text>
              </TouchableOpacity  > 
               </View>

                <View className="flex-row">
                  <Text className="text-white   ">Already have an account?.</Text>
                  <TouchableOpacity onPress={()=>navigator.navigate("Login")}  ><Text className="text-white  ">Sign In</Text></TouchableOpacity>
                </View>
                
              </View>

            </View>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}