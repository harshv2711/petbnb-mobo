import SearchResult from "@/components/searchResult";
import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
const { width } = Dimensions.get("window");

export default function Search() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="px-6 py-8">
          <Text className="text-[28px] font-bold text-black leading-tight mb-3">
            Find Trusted Hosts
          </Text>
          <Text className="text-[16px] text-gray-600 leading-[22px]">
            Choose your location, pet type, and the services you need — and we’ll
            find the perfect sitter for your furry friend.
          </Text>
        </View>

        {/* Search Result Section */}
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
       
      </ScrollView>
    </SafeAreaView>
  );
}
