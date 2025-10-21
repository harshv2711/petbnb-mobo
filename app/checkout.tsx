import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function checkout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Text Section */}
      <View className="px-6 pt-8">
        <Text className="text-[18px] font-bold text-black leading-tight mb-3">
          Pet pickup from this address
        </Text>
        <Text className="text-[16px] text-gray-700 leading-[22px]">
          Flat No. 504, Sunflower Apartments, Road, near Versova Metro Station, Andheri West, Mumbai   400053, Maharashtra
        </Text>
      </View>
      <View className="px-6 py-6 flex-1">
        {/* selected profile  */}
        <View className="border border-gray-200 px-3 py-3 rounded">
          <Text className="text-[16px] border-b pb-3  border-gray-300 font-bold text-black leading-tight mb-2">
            Harsh Vishwakarma
          </Text>
          <Text className="text-[16px] text-gray-700 leading-[22px]">
            Your sitter, Harsh Vishwakarma certified, compassionate, and committed to making your pet feel at home.
          </Text>
        </View>

        {/* booked for  */}
        <View>

          <Text className="text-[16px] font-semibold text-gray-800 mb-3 mt-6">Booking for </Text>
          <View className="border rounded px-3 py-3 mt-1 flex-row justify-between bg-black">
            <Text className="text-[16px] mb-1 text-white">
              Boarding
            </Text>
            <Text className="text-[16px] text-white">
              ₹999 Per day
            </Text>
          </View>
          <View className="border border-gray-200 rounded px-3 py-3 mt-1 flex-row justify-between">
            <Text className="text-[16px] mb-1">
              Walking
            </Text>
            <Text className="text-[16px]">
              ₹299 Per hour
            </Text>
          </View>
          <View className="border border-gray-200 rounded px-3 py-3 mt-1 flex-row justify-between">
            <Text className="text-[16px] mb-1">
              Training
            </Text>
            <Text className="text-[16px]">
              ₹1299 Per day
            </Text>
          </View>
        </View>

        {/* select pet profile  */}
        <View>
          <Text className="text-[16px] font-semibold text-gray-800 mb-3 mt-6">Select Pet Profile </Text>
          <View className="border rounded">
            <View className="px-3 py-4 flex-row justify-between border-b">
              <Text className="text-[16px]">
                Bruno
              </Text>
              <Text className="text-[16px]">
                Dog (Golden Retriever)
              </Text>
            </View>
            <View className="px-3 py-3">
              <Text className="text-[16px] leading-[24px]">
                Loves evening walks and light playtime. Eats dry kibble twice a day.
              </Text>
            </View>
          </View>
        </View>

        {/* date and time  */}
        <View>
          
        </View>

      </View>
    </SafeAreaView>
  );
}
