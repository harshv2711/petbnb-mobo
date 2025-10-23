import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function BookingSuccessfull() {
  const bookingId = "PBNB-48231";
  const sitterName = "Harsh V.";
  const checkIn = "22 Oct, 10:00 AM";
  const checkOut = "25 Oct, 6:00 PM";
  const total = "₹2,997";
  const address =
    "Flat 504, Sunflower Apartments, near Versova Metro, Andheri West, Mumbai 400053";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Header */}
        <Text className="text-[24px] font-bold text-black leading-tight">
          Booking Successful! 🎉
        </Text>
        <Text className="text-[16px] leading-[22px] text-gray-700 mt-2">
          Your booking has been successfully placed, and we’ve notified your sitter.
          You’ll receive a confirmation soon. Rest assured, if the sitter declines, you won’t be charged again.
        </Text>

        {/* Status Banner */}
        <View className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <Text className="text-[16px] leading-[22px] text-amber-900">
            Awaiting sitter confirmation — typically within a few hours.
          </Text>
        </View>

        {/* Booking Summary */}
        <View className="mt-6 border border-gray-200 rounded-xl p-4">
          <Text className="text-[16px] font-semibold text-black mb-2">
            Booking Summary
          </Text>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[16px] text-gray-600">Request ID</Text>
            <Text className="text-[16px] font-semibold text-gray-800">
              {bookingId}
            </Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[16px] text-gray-600">Sitter</Text>
            <Text className="text-[16px] text-gray-800">{sitterName}</Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[16px] text-gray-600">Check-In</Text>
            <Text className="text-[16px] text-gray-800">{checkIn}</Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[16px] text-gray-600">Check-Out</Text>
            <Text className="text-[16px] text-gray-800">{checkOut}</Text>
          </View>

          <View className="mt-2">
            <Text className="text-[16px] text-gray-600 mb-1">Pickup Address</Text>
            <Text className="text-[16px] text-gray-800">{address}</Text>
          </View>

          <View className="flex-row justify-between mt-3 border-t border-gray-200 pt-2">
            <Text className="text-[16px] font-semibold text-black">Est. Total</Text>
            <Text className="text-[16px] font-semibold text-black">{total}</Text>
          </View>
        </View>

        {/* Tips / Next Steps */}
        <View className="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <Text className="text-[14px] leading-[20px] text-gray-800">
            Tip: You can edit notes or change times until the sitter confirms.
          </Text>
          <Text className="text-[14px] leading-[20px] text-gray-800 mt-2">
            Keep your phone handy — we’ll notify you via push + SMS/email.
          </Text>
        </View>

        {/* CTAs */}
        <View className="mt-6 gap-3">
          <Link href={`/bookingDetails`} asChild>
            <TouchableOpacity className="bg-black py-3 rounded-lg items-center">
              <Text className="text-white font-semibold">Track Status</Text>
            </TouchableOpacity>
          </Link>

          <View className="flex-row gap-3">
            <Link href={`/(tabs)/search`} asChild>
              <TouchableOpacity className="flex-1 border border-gray-300 py-3 rounded-lg items-center">
                <Text className="text-black font-semibold">Find Similar</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* Footer Note */}
        <Text className="text-[12px] text-gray-500 mt-6">
          If the sitter declines, your amount will be released automatically.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
