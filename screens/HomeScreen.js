import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { ChevronLeftIcon, UserIcon } from 'react-native-heroicons/solid'

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
  }, [])


  return (
    <SafeAreaView>
      <Text className >
        <View className="flex-row pb-4 items-center mx-4 space-x-1">
          <Image 
          source = {{
            uri: "https://www.pexels.com/photo/abandoned-ancient-antique-architecture-235986/",
          }}
          className = "h-6 w-6 bg-white-200 p-1"
          />
        </View>
        <View className >
          <Text className="font-semibold text-blue-400 text-l">
            Deliver Now 
          </Text>
          <Text className="font-semibold text-blue-400 text-xl">
            Current Location
            <ChevronLeftIcon size={20} color="75AA50"/>
          </Text>
        </View>
        <UserIcon size={20} color="75AA50"/>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen