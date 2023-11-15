import { View, Text, ScrollView, ImageBackground, TouchableOpacity ,Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import ph from '../assets/ph.png'

import Staron from '../assets/staron.png'
import Staroff from '../assets/staroff.png'


export default function ReviewScreen() {
  const navigator =useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
    <ScrollView showsVerticalScrollIndicator={false} className="h-screen">
          
          
    

          <View 
          className="flex-col px-[35px] translate-y-[50px] h-screen">
             
            <View className="flex-row justify-between   items-center w-[200px] mb-[20px] ">
             <TouchableOpacity  onPress={()=>navigator.navigate("Profile")} className=" flex-row justify-center items-center   w-[52px] h-[52px] 
                  rounded-md shadow shadow-lg">
              <Ionicons  className=" flex-row justify-center items-center" 
               name="chevron-back" size={28} color="black" />
              </TouchableOpacity>
              <Text className="text-fade  font-center ">  </Text> 
              
            </View>
             

            <View className="mb-8 items-center text-center">
            <TouchableOpacity className="flex-row items-center w-[162px] h-[162px]  bg-white p-1  rounded-md shadow shadow-lg  ">
                    <Image source={ph}  className="w-[160px] h-[160px]   item-center "  />

            </TouchableOpacity  > 
            </View>

            <View className="mb-7 ">
            <Text className="text-fade font-center text-center text-[20px]  ">  How was your last order from Pizza Hut ? </Text> 
             
            </View>

            <View className="mb-5">
            <Text className="text-primary text-center font-center  text-[20px]"> GOOD </Text>
                 
            </View>

            <View className=" flex-row justify-center   items-center w-full mb-[15px]  " >

            <TouchableOpacity className="  flex-row justify-center shadow shadow-lg items-center w-full bg-white  w-50 h-50">
 
            <Image source={Staron} className="w-[30px] h-[30px]" />
            <Image source={Staron} className="w-[30px] h-[30px]" />  
            <Image source={Staron} className="w-[30px] h-[30px]" /> 
            <Image source={Staron} className="w-[30px] h-[30px]" /> 
            <Image source={Staron} className="w-[30px] h-[30px]" />   
          
            </TouchableOpacity  >  

           </View>

           <View className="mb-10">
               
                <TextInput placeholder="Write" className="w-full flex-row justify-center items-center   p-2 w-full h-[150px] opacity-40    rounded-md border-[1px]   border-fade" />
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