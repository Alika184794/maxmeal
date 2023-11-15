import React from 'react'

import { ScrollView,  View, TouchableOpacity, Text, TextInput ,ImageBackground, Image } from 'react-native';
 
import { SafeAreaView } from 'react-native-safe-area-context' 
import { useNavigation } from '@react-navigation/native' 
import Pizimg from '../assets/44.png'
import Loveimg from '../assets/love.png'
import Starimg from '../assets/star.png'
import { Ionicons } from '@expo/vector-icons';
 
import Face from '../assets/face.png'

export default function FavouriteScreen() {
  const navigator = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={true} className="h-screen overflow-y-auto">
      
      <View className="flex-col px-[22px]  translate-y-[50px]">
      <View className="flex-row justify-between    items-center w-[200px] mb-[20px] gap-[69px]   ">
            <TouchableOpacity onPress={() => navigator.navigate("Review")} className=" flex-row justify-center items-center   w-[52px] h-[52px] 
                  rounded-md shadow shadow-lg">
              <Ionicons className=" flex-row justify-center items-center"
                name="chevron-back" size={28} color="black" />
            </TouchableOpacity>
            <Text className="text-fade  text-[22px] font-center "> Favorites </Text>

            <TouchableOpacity onPress={() => navigator.navigate("Profile")} className="flex-row shadow shadow-lg items-center w-[58px] h-[58px]  bg-white   rounded-full">
              <Image className="  w-[50px] h-[50px] flex-row justify-center items-center rounded-full"
                source={Face}  />
            </TouchableOpacity>

            


            

          </View>
          

<View className="  mt-[15px] rounded-md   ">   
 <TouchableOpacity  onPress={() => navigator.navigate("Order")} className="flex-row justify-between  rounded-md shadow shadow-lg   bg-white   w-[370px] h-[294px]   ">       
                    
<ImageBackground source={Pizimg} className='  w-full h-[188px]   shadow shadow-lg '>

<View className='flex-row justify-between px-[10px] mt-[10px]'>
  
<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[60px] h-[30px]  bg-white p-1 rounded-full">
  <Text className="text-primary text-[10px]">$</Text>
  <Text>12.20</Text>
</TouchableOpacity  > 

<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[30px] h-[30px]   bg-primary p-1 rounded-full mb-[135px]">
<Image source={Loveimg} className="w-[20px] h-[20px]" />
</TouchableOpacity  > 

</View>
 
<TouchableOpacity className="flex-row shadow gap-[8px] item-center mb-1 translate-x-5 shadow-lg items-center w-[95px] h-[45px]  bg-white   rounded-full">
  <Text className=" text-[15px]">4.5</Text>
  <Image source={Starimg} className="w-[10px] h-[10px]" />
  <Text className=" text-[10px] text-fade">(25+)</Text>
</TouchableOpacity  > 

<View  className="flex-row  gap-[8px] item-center  translate-x-5 vitems-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[18px] text-dark" >Chicken Hawaiian</Text>

</View>
<View  className="flex-row   gap-[8px] item-center  translate-x-5   items-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[14px] text-fade" >Chicken, Cheese and pineapple</Text>

</View>


</ImageBackground> 
 

</TouchableOpacity>  
</View>

<View className="  mt-[15px] rounded-md   ">   
 <TouchableOpacity className="flex-row justify-between  rounded-md shadow shadow-lg   bg-white   w-[370px] h-[294px]   ">       
                    
<ImageBackground source={Pizimg} className='  w-full h-[188px]   shadow shadow-lg '>

<View className='flex-row justify-between px-[10px] mt-[10px]'>
  
<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[60px] h-[30px]  bg-white p-1 rounded-full">
  <Text className="text-primary text-[10px]">$</Text>
  <Text>12.20</Text>
</TouchableOpacity  > 

<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[30px] h-[30px]   bg-primary p-1 rounded-full mb-[135px]">
<Image source={Loveimg} className="w-[20px] h-[20px]" />
</TouchableOpacity  > 

</View>
 
<TouchableOpacity className="flex-row shadow gap-[8px] item-center mb-1 translate-x-5 shadow-lg items-center w-[95px] h-[45px]  bg-white   rounded-full">
  <Text className=" text-[15px]">4.5</Text>
  <Image source={Starimg} className="w-[10px] h-[10px]" />
  <Text className=" text-[10px] text-fade">(25+)</Text>
</TouchableOpacity  > 

<View  className="flex-row  gap-[8px] item-center  translate-x-5 vitems-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[18px] text-dark" >Chicken Hawaiian</Text>

</View>
<View  className="flex-row   gap-[8px] item-center  translate-x-5   items-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[14px] text-fade" >Chicken, Cheese and pineapple</Text>

</View>


</ImageBackground> 
 

</TouchableOpacity>  
</View>
<View className="  mt-[15px] rounded-md   ">   
 <TouchableOpacity className="flex-row justify-between  rounded-md shadow shadow-lg   bg-white   w-[370px] h-[294px]   ">       
                    
<ImageBackground source={Pizimg} className='  w-full h-[188px]   shadow shadow-lg '>

<View className='flex-row justify-between px-[10px] mt-[10px]'>
  
<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[60px] h-[30px]  bg-white p-1 rounded-full">
  <Text className="text-primary text-[10px]">$</Text>
  <Text>12.20</Text>
</TouchableOpacity  > 

<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[30px] h-[30px]   bg-primary p-1 rounded-full mb-[135px]">
<Image source={Loveimg} className="w-[20px] h-[20px]" />
</TouchableOpacity  > 

</View>
 
<TouchableOpacity className="flex-row shadow gap-[8px] item-center mb-1 translate-x-5 shadow-lg items-center w-[95px] h-[45px]  bg-white   rounded-full">
  <Text className=" text-[15px]">4.5</Text>
  <Image source={Starimg} className="w-[10px] h-[10px]" />
  <Text className=" text-[10px] text-fade">(25+)</Text>
</TouchableOpacity  > 

<View  className="flex-row  gap-[8px] item-center  translate-x-5 vitems-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[18px] text-dark" >Chicken Hawaiian</Text>

</View>
<View  className="flex-row   gap-[8px] item-center  translate-x-5   items-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[14px] text-fade" >Chicken, Cheese and pineapple</Text>

</View>


</ImageBackground> 
 

</TouchableOpacity>  
</View>
<View className="  mt-[15px] rounded-md mb-[105px] ">   
 <TouchableOpacity className="flex-row justify-between  rounded-md shadow shadow-lg   bg-white   w-[370px] h-[294px]   ">       
                    
<ImageBackground source={Pizimg} className='  w-full h-[188px]   shadow shadow-lg '>

<View className='flex-row justify-between px-[10px] mt-[10px]'>
  
<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[60px] h-[30px]  bg-white p-1 rounded-full">
  <Text className="text-primary text-[10px]">$</Text>
  <Text>12.20</Text>
</TouchableOpacity  > 

<TouchableOpacity className="flex-row shadow shadow-lg items-center w-[30px] h-[30px]   bg-primary p-1 rounded-full mb-[135px]">
<Image source={Loveimg} className="w-[20px] h-[20px]" />
</TouchableOpacity  > 

</View>
 
<TouchableOpacity className="flex-row shadow gap-[8px] item-center mb-1 translate-x-5 shadow-lg items-center w-[95px] h-[45px]  bg-white   rounded-full">
  <Text className=" text-[15px]">4.5</Text>
  <Image source={Starimg} className="w-[10px] h-[10px]" />
  <Text className=" text-[10px] text-fade">(25+)</Text>
</TouchableOpacity  > 

<View  className="flex-row  gap-[8px] item-center  translate-x-5 vitems-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[18px] text-dark" >Chicken Hawaiian</Text>

</View>
<View  className="flex-row   gap-[8px] item-center  translate-x-5   items-center w-full h-[45px]  bg-white   rounded-full">

<Text className=" text-[14px] text-fade" >Chicken, Cheese and pineapple</Text>

</View>


</ImageBackground> 
 

</TouchableOpacity>  
</View>


        </View>

      </ScrollView>
    </SafeAreaView>
  )
}