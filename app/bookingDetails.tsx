import { Calendar, MapPin, PawPrint, Phone } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type BookingStatus = "Pending" | "Confirmed" | "Upcoming" | "Ongoing" | "Completed" | "Canceled";

export default function BookingDetails() {
  // ---- Mock booking data (replace with props or fetch) ----
  const [status, setStatus] = useState<BookingStatus>("Confirmed");
  const bookingId = "#PB7843";
  const priceTotal = 1400; // INR
  const startDate = "Oct 25, 2025";
  const endDate = "Oct 27, 2025";

  // ---- UI state for cancel flow ----
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const [refundQuote, setRefundQuote] = useState<{ amount: number; currency: "INR" } | null>(null);

  // Rules: Can cancel only if status in allowed set
  const canCancel = useMemo(
    () => ["Pending", "Confirmed", "Upcoming"].includes(status),
    [status]
  );

  // Simulate refund quote (replace with GET /bookings/{id}/refund-quote)
  const fetchRefundQuote = async () => {
    // Example: "Flexible" policy: full refund if >24h before start (mock)
    // For demo, we’ll just show a fixed 100% refund:
    const mock = { amount: priceTotal, currency: "INR" as const };
    setRefundQuote(mock);
    setConfirmVisible(true);
  };

  // Simulate cancel API (replace with POST /bookings/{id}/cancel)
  const confirmCancel = async () => {
    setIsCancelling(true);
    try {
      // await api call...
      await new Promise((r) => setTimeout(r, 900));
      setStatus("Canceled");
    } finally {
      setIsCancelling(false);
      setConfirmVisible(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <Image
          source={{
            uri: "https://a0.muscache.com/im/pictures/miso/Hosting-1196865462260868560/original/302d5277-180b-415d-b19d-f13268ff96b9.jpeg?im_w=960",
          }}
          className="w-full h-[250px]"
          resizeMode="cover"
        />

        {/* Booking Info */}
        <View className="px-6 py-5">
          <Text className="text-[22px] font-semibold text-black mb-1">
            Boarding with Priya Sharma
          </Text>

          <View className="flex-row items-center mb-2">
            <MapPin size={16} color="#6B7280" />
            <Text className="ml-1 text-[14px] text-gray-600">Bandra West, Mumbai</Text>
          </View>

          <View className="flex-row items-center mb-2">
            <Calendar size={16} color="#6B7280" />
            <Text className="ml-1 text-[14px] text-gray-600">
              {startDate} – {endDate}
            </Text>
          </View>

          <View className="flex-row items-center mb-3">
            <PawPrint size={16} color="#6B7280" />
            <Text className="ml-1 text-[14px] text-gray-600">
              Pet: <Text className="font-medium text-gray-800">Buddy (Golden Retriever)</Text>
            </Text>
          </View>

          <Text className="text-[15px] font-semibold text-black mb-1">
            ₹{priceTotal} total • Boarding • 2 nights
          </Text>

          {/* Live status chip */}
          <Text
            className={`mt-2 text-[13px] font-semibold ${
              status === "Confirmed"
                ? "text-green-600"
                : status === "Pending"
                ? "text-yellow-600"
                : status === "Upcoming"
                ? "text-blue-600"
                : status === "Ongoing"
                ? "text-blue-600"
                : status === "Completed"
                ? "text-gray-600"
                : "text-red-600"
            }`}
          >
            Status: {status}
          </Text>
        </View>

        {/* Divider */}
        <View className="border-t border-gray-200" />

        {/* Sitter Info */}
        <View className="px-6 py-5">
          <View className="flex-row items-center gap-3 mb-3">
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
              className="w-[60px] h-[60px] rounded-full"
            />
            <View>
              <Text className="text-[16px] font-semibold text-black">Priya Sharma</Text>
              <Text className="text-[14px] text-gray-600">PetBnB Superhost 🐾</Text>
            </View>
          </View>

          <Text className="text-[15px] text-gray-700 leading-[22px]">
            Priya has over 5 years of experience caring for dogs and cats. She offers a cozy home
            with a small outdoor area perfect for playtime. Your pet will be cared for like family!
          </Text>

          <View className="flex-row items-center mt-3">
            <Phone size={16} color="#6B7280" />
            <Text className="ml-1 text-[14px] text-gray-600">Contact: +91 98765 43210</Text>
          </View>
        </View>

        {/* Divider */}
        <View className="border-t border-gray-200" />

        {/* Booking Summary */}
        <View className="px-6 py-5">
          <Text className="text-[18px] font-semibold text-black mb-2">Booking Summary</Text>

          <View className="border border-gray-200 rounded-lg p-3 bg-gray-50">
            <View className="flex-row justify-between mb-1">
              <Text className="text-[14px] text-gray-600">Booking ID</Text>
              <Text className="text-[14px] font-medium text-gray-800">{bookingId}</Text>
            </View>
            <View className="flex-row justify-between mb-1">
              <Text className="text-[14px] text-gray-600">Status</Text>
              <Text
                className={`text-[14px] font-semibold ${
                  status === "Confirmed"
                    ? "text-green-600"
                    : status === "Pending"
                    ? "text-yellow-600"
                    : status === "Upcoming"
                    ? "text-blue-600"
                    : status === "Ongoing"
                    ? "text-blue-600"
                    : status === "Completed"
                    ? "text-gray-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[14px] text-gray-600">Payment</Text>
              <Text className="text-[14px] font-semibold text-black">Paid</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View className="border-t border-gray-200" />

        {/* Actions */}
        <View className="px-6 py-6 flex-row gap-3">
          <TouchableOpacity className="flex-1 border border-gray-300 py-3 rounded-lg">
            <Text className="text-center text-[15px] font-medium text-black">Message Sitter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 py-3 rounded-lg ${
              canCancel ? "bg-black" : "bg-gray-300"
            }`}
            disabled={!canCancel || isCancelling}
            onPress={fetchRefundQuote}
          >
            <Text className="text-center text-[15px] font-medium text-white">
              {isCancelling ? "Cancelling..." : "Cancel Booking"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ---- Confirm Cancel Sheet ---- */}
      {confirmVisible && (
        <View className="absolute inset-0 bg-black/40 justify-end">
          <View className="bg-white px-6 pt-5 pb-6 rounded-t-2xl">
            <Text className="text-[18px] font-semibold text-black mb-2">Cancel this booking?</Text>
            <Text className="text-[14px] text-gray-600 mb-3">
              Based on the host’s policy, your refund will be{" "}
              <Text className="font-semibold text-black">
                {refundQuote ? `₹${refundQuote.amount}` : "—"}
              </Text>
              . Are you sure you want to cancel?
            </Text>

            {/* Policy highlight (example) */}
            <View className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4">
              <Text className="text-[13px] text-gray-700">
                • Full refund if canceled &gt; 24h before start{"\n"}
                • 50% refund up to start time{"\n"}• No refund after check-in
              </Text>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity
                className="flex-1 border border-gray-300 rounded-lg py-3"
                onPress={() => setConfirmVisible(false)}
              >
                <Text className="text-center text-[15px]">Keep Booking</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-1 bg-black rounded-lg py-3"
                onPress={confirmCancel}
                disabled={isCancelling}
              >
                <Text className="text-center text-[15px] text-white">
                  {isCancelling ? "Cancelling..." : "Confirm Cancel"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
