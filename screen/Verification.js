import { View, Text, ScrollView, ImageBackground, TouchableOpacity ,Image, TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcomebg from '../assets/welcome.png'
import { LinearGradient } from 'expo-linear-gradient'
import Fbimg from '../assets/fbimg.png'
import Goimg from '../assets/goimg.png'
import { useNavigation } from '@react-navigation/native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'


export default function Welcome() {

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
 
 
  const CELL_COUNT = 4;
  const navigation = useNavigation();


  const navigator=useNavigation()
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="h-screen">
            <View className="flex-col px-[35px] translate-y-[150px] h-screen">
              <View className="mb-8">
                <Text className="text-dark   text-[30px]">Verification Code </Text> 
                <Text className="text-fade  ">Please type the verification code sent to prelookstudio@gmail.com</Text>
             
              </View>
               <View>

               <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={{marginTop:40}}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        className='w-[40px] h-[40px] text-[24px] flex-row justify-center items-center border-[3px] text-center border-[#000] hover:border-orange mt-[20px]'
        renderCell={({index, symbol, isFocused}) => (
          <Text
          className='w-[60px] h-[60px] text-[24px] border-[1px] rounded-xl text-center border-darkGrey focus:border-orange mt-[20px]'
            style={{ fontFamily: 'SofiaLight' }}
            key={index}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
          />  

             
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

              

             

            </View>
         
      </ScrollView>
    </SafeAreaView>
  )
}