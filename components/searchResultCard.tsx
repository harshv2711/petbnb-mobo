import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

interface SearchResultCardProps {
  sitterName: string;
  location: string;
  services: string;
  petType: string;
  availability: string;
  price: string;
  sitterImage: string;
  coverImage: string;
  rating?: string;
  reviews?: string;
  isSuperhost?: boolean;
}

export default function searchResultCard({
  sitterName,
  location,
  services,
  petType,
  availability,
  price,
  sitterImage,
  coverImage,
  rating = "4.9",
  reviews = "52",
  isSuperhost = true,
}: SearchResultCardProps) {
  return (
    <View className="">
      {/* Search Result Card */}
      <View className="overflow-hidden border border-gray-200 bg-white pb-6">
        {/* Main Image */}
        <Image
          source={{
            uri: coverImage,
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
                uri: sitterImage,
              }}
              className="w-[50px] h-[50px] rounded-full"
            />

            {/* Right Column: Info */}
            <View className="flex-1 gap-[1px]">
              <Text className="text-[18px] font-semibold text-black leading-[24px] mb-1">
                {sitterName} in {location} 
                {/* is a Superhost */}
              </Text>
              <Text className="text-[15px] font-medium text-gray-700 leading-[22px]">
                {services}
              </Text>
              <Text className="text-[15px] font-medium text-gray-700 leading-[22px]">
                {petType}
              </Text>
              <Text className="text-[15px] text-gray-600 font-medium leading-[22px]">
                Availability: {availability}
              </Text>
              <Text className="text-[15px] font-medium text-gray-600 leading-[22px]">
                {price}
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