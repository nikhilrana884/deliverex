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
      <Text>
        <View>
          <Image 
          source = {{
            uri: 'link ',
          }}
          className = "h-6 w-6 bg-white-200 p-3"
          />
        </View>
        <View>
          <Text className="font-semibold text-blue-400 text-s">
            Deliver Now 
          </Text>
          <Text className="font-semibold text-black-400 text-xl">
            Current Location
            <ChevronLeftIcon size={20} color="75AA50"/>
          </Text>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen