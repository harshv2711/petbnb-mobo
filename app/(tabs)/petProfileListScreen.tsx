import PetProfileCard from "@/components/PetProfileCard";
import { Plus } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PetProfileListScreen() {
  return (
    <SafeAreaView className="flex-1 bg-themeBg">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 py-6 flex-row items-center justify-between">
          <Text className="text-[24px] font-primaryBold text-black">
            My Pet Profiles 
          </Text>

          {/* Create Pet Profile Button */}
          <TouchableOpacity className="flex-row items-center gap-2 bg-[#f97316] pl-2 pr-4 py-2 rounded-[6px]">
            <Plus size={18} color="#fff" />
            <Text className="text-white text-[14px] font-medium">
              Create
            </Text>
          </TouchableOpacity>
        </View>

        {/* Placeholder for Pet Cards */}
        <View className="px-6 py-2">
          <Text className="text-[14px] text-gray-600">
            You haven’t added any pets yet.
          </Text>
        </View>
        <View className="px-6 py-2 flex-col gap-1">
          <PetProfileCard></PetProfileCard>
          <PetProfileCard></PetProfileCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
