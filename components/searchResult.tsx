import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'

export default function SearchResult() {
  return (
    <View className="">
      {/* Search Result Card */}
      <View className="overflow-hidden border border-gray-200 bg-white pb-6">
        {/* Main Image */}
        <Image
          source={{
            uri: "https://a0.muscache.com/im/pictures/2a466bb0-5738-47d1-b42b-345da9dadd3a.jpg?im_w=960",
          }}
          className="w-full h-[400px]"
          resizeMode="cover"
        />

        {/* Caption / Info Section */}
        <View className="py-4 px-3 bg-white">
          <View className="flex-row justify-between items-start gap-4">
            {/* Left Column: Avatar */}
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/68.jpg",
              }}
              className="w-[50px] h-[50px] rounded-full"
            />

            {/* Right Column: Info */}
            <View className="flex-1 gap-[1px]">
              <Text className="text-[18px] font-semibold text-black leading-[24px] mb-1">
                Andy-Kevin in Paris is a Superhost
              </Text>
              <Text className="text-[15px] font-medium text-gray-700 leading-[22px]">
                Boarding • Walking • Day Care
              </Text>
              <Text className="text-[15px] text-gray-600 font-medium leading-[22px]">
                Availability: Weekdays & Weekends
              </Text>
              <Text className="text-[15px] font-medium text-gray-600 leading-[22px]">
                Starting Price: ₹700 / night
              </Text>
            </View>
          </View>
        </View>

        {/* btn  */}
        <View className="flex-row justify-between gap-2 px-3 mt-3">
          <Link href="/sitterProfile" asChild>
            <TouchableOpacity className="flex-1 border border-gray-300 py-2 rounded flex-row justify-center items-center">
              <Text className="text-black font-semibold text-center text-[14px]">
                View Profile
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/checkout" asChild>
            <TouchableOpacity className="flex-1 bg-black py-2 rounded flex-row justify-center items-center">
              <Text className="text-white font-semibold text-center text-[14px]">
                Book Now
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})