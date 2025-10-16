import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-8 py-6">
      <Link href="/" asChild>
        <TouchableOpacity activeOpacity={0.8}>
          <Text className="text-[18px] font-bold text-black">PetBnb</Text>
        </TouchableOpacity>
      </Link>
    </View>


      {/* Hero Section */}
      <View className="flex-1 justify-between px-8 pb-8">
        {/* Text Content */}
        <View>
          <Text className="text-[32px] font-bold text-black leading-tight">
            Find a loving home {"\n"}when you're away.
          </Text>
          <Text className="text-[16px] leading-[24px] text-gray-700 mt-3">
            PetBnb connects pet parents with trusted local hosts who provide safe, loving homes when they're away.
          </Text>
        </View>

        {/* Hero Image */}
        <ImageBackground className="rounded-2xl overflow-hidden my-6" source={{
          uri: "https://i.pinimg.com/1200x/8d/e8/b9/8de8b965d856c60b0da65ac6a57fc6c3.jpg",
        }}>
          <View className="h-[60%] rounded-1">
            {/* <Image
              source={{
                uri: "https://i.pinimg.com/1200x/8d/e8/b9/8de8b965d856c60b0da65ac6a57fc6c3.jpg",
              }}
              className="w-full h-64 rounded-2xl"
              resizeMode="cover"
            /> */}
          </View>
        </ImageBackground>
        {/* Buttons */}
        <View className="flex-col gap-3 w-full">
          <Link href="/search" asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="py-4 px-6 bg-black rounded-full"
            >
              <Text className="text-white text-center text-[16px] font-semibold">
                Find a Sitter
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/search" asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="py-4 px-6 bg-gray-100 rounded-full"
            >
              <Text className="text-black text-center text-[16px] font-semibold">
                Become a Host
              </Text>
            </TouchableOpacity>
          </Link>
        </View>


      </View>
    </SafeAreaView>
  );
}
