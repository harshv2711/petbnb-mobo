import { Link } from "expo-router";
import { Calendar, MapPin } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface BookingCardProps {
    sitterName: string;
    sitterImage: string;
    location: string;
    serviceType: string;
    startDate: string;
    endDate: string;
    petName: string;
    price: string;
    status: "Confirmed" | "Pending" | "Ongoing" | "Completed";
}

export default function BookingCard({
    sitterName,
    sitterImage,
    location,
    serviceType,
    startDate,
    endDate,
    petName,
    price,
    status,
}: BookingCardProps) {
    return (
        <View className="py-6 border-b border-gray-300">
            <View className="flex-row gap-3 px-6">
                {/* Header Image */}
                <View className="">
                    <Image
                        source={{ uri: sitterImage }}
                        className="w-[50px] h-[50px] rounded-full"
                        resizeMode="cover"
                    />
                </View>

                {/* Booking Info */}
                <View className=" flex-1">
                    {/* Sitter Name & Status */}
                    <View className="flex-row justify-between items-center mb-2">
                        <Text className="text-[18px] font-semibold text-black">
                            {sitterName}
                        </Text>
                        <Text
                            className={`text-[14px] font-medium ${status === "Confirmed"
                                    ? "text-green-600"
                                    : status === "Pending"
                                        ? "text-yellow-500"
                                        : status === "Ongoing"
                                            ? "text-blue-500"
                                            : "text-gray-500"
                                }`}
                        >
                            {status}
                        </Text>
                    </View>

                    {/* Location */}
                    <View className="flex-row items-center mb-2">
                        <MapPin size={16} color="#6B7280" />
                        <Text className="ml-1 text-[16px] text-gray-600">{location}</Text>
                    </View>

                    {/* Service Type */}
                    <Text className="text-[15px] text-gray-700 font-medium mb-2">
                        {serviceType}
                    </Text>

                    {/* Pet Name */}
                    <Text className="text-[16px] text-gray-600 mb-2">
                        Pet: <Text className="font-medium">{petName}</Text>
                    </Text>

                    {/* Dates */}
                    <View className="flex-row items-center mb-2">
                        <Calendar size={16} color="#6B7280" />
                        <Text className="ml-1 text-[16px] text-gray-600">
                            {startDate} → {endDate}
                        </Text>
                    </View>

                    {/* Price */}
                    <Text className="text-[15px] font-semibold text-black mt-1">
                        {price}
                    </Text>

                </View>
            </View>
            {/* Action Buttons */}
            <View className="flex-row gap-3 mt-4 px-6">
                <Link href="/bookingDetails" asChild>
                    <TouchableOpacity className="flex-1 border border-gray-300 py-2 rounded-lg">
                        <Text className="text-center text-[14px] font-medium text-black">
                            View Details
                        </Text>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity className="flex-1 bg-black py-2 rounded-lg flex-row justify-center items-center">
                    <Text className="text-center text-[14px] font-medium text-white">
                        Contact Sitter
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
