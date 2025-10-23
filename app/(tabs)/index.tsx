import { Link } from "expo-router"; // ✅ Correct import
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6 py-8 flex-1">
        {/* Text Section */}
        <View>
          <Text className="font-primary-bold text-[32px] font-bold text-black leading-tight mb-3">
            Find a loving home when you're away.
          </Text>
          <Text className="text-[16px] text-gray-700 leading-[22px]">
            Connect with trusted, verified pet sitters who care like you do.
            Safe, comfortable, and stress-free stays for your pets.
          </Text>
        </View>

        {/* Buttons Section */}
        <View className="mt-8">
          <Link href="/search" asChild>
            <TouchableOpacity className="bg-primary rounded-full py-4 mb-3">
              <Text className="text-white text-center text-[16px] font-semibold">
                Find a Sitter
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/search" asChild>
            <TouchableOpacity className="border border-primary rounded-full py-4">
              <Text className="text-primary text-center text-[16px] font-semibold">
                Become a Host
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
