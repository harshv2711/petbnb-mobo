import { Edit3, PawPrint } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function PetProfileCard() {
  return (
    <View className="">
      {/* Card */}
      <View className="border border-gray-200 rounded-[9px] bg-white p-4">
        {/* Pet Info Row */}
        <View className="flex-row items-center gap-4">
          {/* Pet Image */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=800",
            }}
            className="w-[70px] h-[70px] rounded-[12px]"
          />

          {/* Pet Details */}
          <View className="flex-1">
            <Text className="text-[16px] font-semibold text-black mb-2">
              Mochi 🐾
            </Text>
            <Text className="text-[13px] text-gray-600">
              Shiba Inu • 3 years • Female
            </Text>
            <Text className="text-[13px] text-gray-500 mt-1">
              Loves long walks and chicken treats.
            </Text>
          </View>

          {/* Edit Button */}
          <TouchableOpacity className="p-2 rounded-full bg-orange-50 border border-orange-100">
            <Edit3 size={18} color="#f97316" />
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View className="border-t border-gray-100 mt-4 mb-3" />

        {/* Bottom Meta Info */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <PawPrint size={16} color="#f97316" />
            <Text className="text-[13px] text-gray-600">
              Last vet visit: Aug 2025
            </Text>
          </View>

          <TouchableOpacity className="bg-[#f97316] px-4 py-1.5 rounded-[8px]">
            <Text className="text-white text-[13px] font-medium">View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
