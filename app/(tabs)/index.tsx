import { Link } from "expo-router"; // ✅ Correct import
import { Phone } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
            <TouchableOpacity className="bg-black rounded-full py-4 mb-2 flex-row items-center justify-center gap-2">
              <View className="flex-row items-center">
                <Image
                  source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
                  className="w-5 h-5 mr-2"
                />
                <Text className="text-white text-center text-[14px] font-semibold">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/search" asChild>
            <TouchableOpacity className="border border-titleColor rounded-full py-4 flex-row items-center justify-center gap-2">
              <Phone size={18} color="{titleColor}" />
              <Text className="text-titleColor text-center text-[14px] font-semibold">
                Continue with Phone Number
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
