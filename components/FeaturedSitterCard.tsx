import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface FeaturedSitterProps {
  sitterName: string;
  location: string;
  coverImage: string;
  rating: string;
  reviews: string;
  price: string;
}

export default function FeaturedSitterCard({
  sitterName,
  location,
  coverImage,
  rating,
  reviews,
  price,
}: FeaturedSitterProps) {
  return (
    <View className="rounded-[12px] border border-gray-200 overflow-hidden bg-white w-[250px] mr-4">
      {/* Cover Image */}
      <Image
        source={{ uri: coverImage }}
        className="w-full h-[150px]"
        resizeMode="cover"
      />

      {/* Info */}
      <View className="p-3">
        <Text
          className="text-[16px] font-semibold text-black"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {sitterName}
        </Text>
        <Text className="text-[14px] text-gray-600 mt-1" numberOfLines={1}>
          {location}
        </Text>
        <Text className="text-[13px] text-gray-700 mt-2">
          ⭐ {rating} ({reviews} reviews)
        </Text>
        <Text className="text-[14px] text-gray-800 mt-2 font-medium">
            {price}
        </Text>

        {/* View Profile Button */}
        <Link href="/sitterProfile" asChild>
          <TouchableOpacity className="mt-3 bg-black rounded-[8px] py-2">
            <Text className="text-white text-[13px] text-center font-semibold">
              View Profile
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
