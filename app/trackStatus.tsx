import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function TrackStatus() {
  const bookingId = "PBNB-48231";
  const sitterName = "Harsh V.";
  const checkIn = "22 Oct, 10:00 AM";
  const checkOut = "25 Oct, 6:00 PM";
  const status = "pending_sitter"; // This will dynamically update based on actual status
  const total = "₹2,997";
  const address =
    "Flat 504, Sunflower Apartments, near Versova Metro, Andheri West, Mumbai 400053";
  const estimatedTime = "within a few hours"; // Example time for sitter response

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Booking Header */}
        <Text className="text-[24px] font-bold text-black leading-tight">
          Track Booking Status
        </Text>
        <Text className="text-[14px] text-gray-700 mt-2">
          Here’s the current status of your booking. You’ll be notified as soon as the sitter confirms or declines.
        </Text>

        {/* Status Banner */}
        <View className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <Text className="text-[14px] text-amber-900">
            {status === "pending_sitter"
              ? `Awaiting sitter confirmation — typically ${estimatedTime}.`
              : status === "confirmed"
              ? "Booking Confirmed! Your sitter is ready."
              : "Sitter Declined. We’ll refund your payment."}
          </Text>
        </View>

        {/* Booking Summary */}
        <View className="mt-6 border border-gray-200 rounded-xl p-4">
          <Text className="text-[16px] font-semibold text-black mb-2">
            Booking Summary
          </Text>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[13px] text-gray-600">Request ID</Text>
            <Text className="text-[13px] font-semibold text-gray-800">
              {bookingId}
            </Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[13px] text-gray-600">Sitter</Text>
            <Text className="text-[13px] text-gray-800">{sitterName}</Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[13px] text-gray-600">Check-In</Text>
            <Text className="text-[13px] text-gray-800">{checkIn}</Text>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-[13px] text-gray-600">Check-Out</Text>
            <Text className="text-[13px] text-gray-800">{checkOut}</Text>
          </View>

          <View className="mt-2">
            <Text className="text-[13px] text-gray-600 mb-1">Pickup Address</Text>
            <Text className="text-[13px] text-gray-800">{address}</Text>
          </View>

          <View className="flex-row justify-between mt-3 border-t border-gray-200 pt-2">
            <Text className="text-[14px] font-semibold text-black">Est. Total</Text>
            <Text className="text-[14px] font-semibold text-black">{total}</Text>
          </View>
        </View>

        {/* Action Section */}
        <View className="mt-5">
          {/* If pending sitter confirmation */}
          {status === "pending_sitter" && (
            <View>
              <Text className="text-[14px] text-gray-700 mb-3">
                You’re still waiting for the sitter to confirm. Please be patient, they will confirm or decline soon.
              </Text>

              <Link href={`/booking/${bookingId}/edit`} asChild>
                <TouchableOpacity className="bg-black py-3 rounded-lg items-center mb-3">
                  <Text className="text-white font-semibold">Edit Details</Text>
                </TouchableOpacity>
              </Link>

              <Link href={`/searchResult`} asChild>
                <TouchableOpacity className="border border-gray-300 py-3 rounded-lg items-center">
                  <Text className="text-black font-semibold">Find Similar Sitters</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}

          {/* If booking confirmed */}
          {status === "confirmed" && (
            <View>
              <Text className="text-[14px] text-green-700 mb-3">
                Your sitter has confirmed the booking! We're all set for your pet's stay.
              </Text>

              <Link href={`/booking/${bookingId}/chat`} asChild>
                <TouchableOpacity className="bg-black py-3 rounded-lg items-center mb-3">
                  <Text className="text-white font-semibold">Start Chat with Sitter</Text>
                </TouchableOpacity>
              </Link>

              <Link href={`/booking/${bookingId}`} asChild>
                <TouchableOpacity className="border border-gray-300 py-3 rounded-lg items-center">
                  <Text className="text-black font-semibold">View Booking Details</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}

          {/* If sitter declined */}
          {status === "declined" && (
            <View>
              <Text className="text-[14px] text-red-700 mb-3">
                Unfortunately, the sitter has declined your request. We’ll process your refund, and you can choose another sitter.
              </Text>

              <Link href={`/searchResult`} asChild>
                <TouchableOpacity className="bg-black py-3 rounded-lg items-center">
                  <Text className="text-white font-semibold">Find Another Sitter</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        </View>

        {/* Footer */}
        <Text className="text-[12px] text-gray-500 mt-6">
          We’ll notify you once the sitter confirms or declines. Keep an eye on your notifications.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
