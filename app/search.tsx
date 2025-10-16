import { Link } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {
  const [query, setQuery] = useState("");

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

      {/* Content */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 32, paddingBottom: 24 }} className="flex-1">
        {/* Text Content */}
        <View>
          <Text className="text-[32px] font-bold text-black leading-tight">
            Find trusted pet {"\n"}sitters near you
          </Text>
          <Text className="text-[16px] leading-[24px] text-gray-700 mt-3">
            Browse verified local hosts who offer safe, loving care for your pets while you’re away. Choose by location,
            service, or pet type — and book with confidence.
          </Text>
        </View>

        {/* Search Input */}
        <View className="mt-6">
          <Text className="text-[14px] text-gray-600 mb-2">Location</Text>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search by area, city, or landmark"
            placeholderTextColor="#9CA3AF"
            className="border border-gray-300 rounded-xl px-4 py-3 text-[16px] bg-white"
          />
        </View>

        {/* Actions */}
        <View className="mt-4 flex-row gap-3">
          <Link
            href="/"
            asChild
          >
            <TouchableOpacity activeOpacity={0.8} className="flex-1 bg-black rounded-full py-3 px-4">
              <Text className="text-center text-[16px] text-white">Search Sitters</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/" asChild>
            <TouchableOpacity activeOpacity={0.8} className="flex-1 border border-gray-300 rounded-full py-3 px-4">
              <Text className="text-center text-[16px] text-gray-800">Filters</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Quick tips / helper */}
        <View className="mt-6">
          <Text className="text-[12px] text-gray-500">
            Tip: Try “Borivali”, “Powai”, or “Bandra West” to see sitters nearby.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
