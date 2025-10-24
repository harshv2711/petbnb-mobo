import { Link } from "expo-router"; // ✅ Correct import
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF2EF]">
        <View className="px-6 pt-1 flex-1 flex-col justify-between">
          {/* Text Section */}
          <View>
            <Text className="font-primary-bold text-[16px] font-bold text-titleColor leading-[36px] mb-3">
              PetBnb
            </Text>
            <Text className="font-primaryBold text-[32px] font-bold text-titleColor leading-[36px] mb-3">
              Find a loving home when you're away.
            </Text>
            <Text className="text-[14px] text-gray-700 leading-[18px]">
              Connect with trusted, verified pet sitters who care like you do.
              Safe, comfortable, and stress-free stays for your pets.
            </Text>
          </View>

          {/* Buttons Section */}
          <View className="mt-8">
            <Link href="/search" asChild>
              <TouchableOpacity className="bg-primary rounded-full py-4 mb-2">
                <Text className="text-white text-center text-[14px] font-semibold">
                  Find a Sitter
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/search" asChild>
              <TouchableOpacity className="border border-primary rounded-full py-4">
                <Text className="text-primary text-center text-[14px] font-semibold">
                  Become a Host
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
    </SafeAreaView>
  );
}
