import React from 'react'

import { ScrollView,  View, TouchableOpacity, Text, TextInput ,ImageBackground, Image } from 'react-native';
 
import { SafeAreaView } from 'react-native-safe-area-context' 
import { useNavigation } from '@react-navigation/native' 
import Pizimg from '../assets/44.png'
import Loveimg from '../assets/love.png'
import Starimg from '../assets/star.png'
import { Ionicons } from '@expo/vector-icons';
import Starb from '../assets/starb.png'
import Face from '../assets/face.png'
 
 

export default function OrderScreen() {
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
            <Text className="text-fade  text-[22px] font-center "> My Orders </Text>

            <TouchableOpacity onPress={() => navigator.navigate("Profile")} className="flex-row shadow shadow-lg items-center w-[58px] h-[58px]  bg-white   rounded-full">
              <Image className="  w-[50px] h-[50px] flex-row justify-center items-center rounded-full"
                source={Face}  />
            </TouchableOpacity> 

          </View>
          

<View className="  flex-row  bg-primary   w-full h-[271px]  rounded-full  mt-[1px]      ">   
                     
<View   className='  w-full h-[213px]  bg-white rounded-md shadow shadow-lg p-2 '>

<View className='flex-row justify-between px-[10px] mt-[2px]'>
  
<TouchableOpacity className="flex-row  rounded-md shadow shadow-lg  gap-1 items-center w-[85px] h-[85px]  bg-white  rounded-md">
  
  <Image source={Starb} className="w-[55px] h-[55px]"></Image>
  

  <View  className="    item-center  translate-x-5  items-left w-full h-[45px]  ">

<Text className=" text-[13px] text-fade" >3 Items</Text>
<View className="flex-row  items-center    ">
<Text className="  text-[18px] text-dark" >Starbuck    </Text>
<Image source={Starimg} className="w-[10px] h-[10px]" />


</View>

</View>
 
  
</TouchableOpacity  > 
 
<TouchableOpacity className="   items-center     ">
<Text   className=" text-primary" >#264100</Text>

</TouchableOpacity  >  
 
</View> 

<View className='flex-row justify-between px-[8px] mt-[1px]'>
  
<View className="  items-center      p-[1px] ">
  
  <Text className="flex-row text-[11px] text-fade items-center     " >Estimated Arrival</Text>

  <View  className=" flex-row   gap-1   translate-x-5  items-center w-full  translate-x-1  ">
  
<Text className=" text-[25px] text-dark" >25</Text>
<Text className=" text-[12px] translate-y-2 text-fade" >min</Text> 
</View>
 
  
</View > 
 
<View className="   items-center     ">
<Text   className=" text-[11px] text-fade" >Now</Text>
<Text   className=" text-[12px] text-dark" >Food on the way</Text>
</View >   
</View>




<View className='flex-row justify-between px-[8px] mt-[1px]'>
  
<View className="  flex-row items-center      p-[1px] ">  
<TouchableOpacity className="items-center w-[160px] h-[50px]   bg-white p-2 rounded-full shadow shadow-lg">
      
      <Text>Cancel</Text>
    </TouchableOpacity  >   
</View > 
<View className="  flex-row items-center      p-[1px] ">  
<TouchableOpacity className="items-center w-[160px] h-[50px]   bg-primary p-2 rounded-full shadow shadow-lg">
      
      <Text  className=" text-white">Track Order</Text>
    </TouchableOpacity  >   
</View > 
 
   
</View>


  

</View> 
 
</View>
 

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}