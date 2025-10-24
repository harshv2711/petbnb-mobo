import { Bell, CalendarDays, ChevronRight, CreditCard, HelpCircle, Home, Languages, Shield, User, UserPlus } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function hostProfile() {
    return (
        <SafeAreaView>
            <View className="px-6 py-6 flex-row items-center justify-between">
                <Text className="font-primaryBold text-[24px]">Host Account</Text>
                {/* Notification bell with badge */}
                <View className="relative w-[40px] h-[40px]">
                    <TouchableOpacity className="p-2">
                        <Bell size={22} color="#111827" />
                    </TouchableOpacity>
                    {/* Badge */}
                    <View className="absolute top-[3px] right-[6px] w-[14px] h-[14px] bg-red-500 rounded-full items-center justify-center">
                        <Text className="text-white text-[9px] font-semibold">3</Text>
                    </View>
                </View>
            </View>
            {/* user profile info */}
            <TouchableOpacity className="flex-row items-center justify-between px-6 py-3 rounded-[12px] border-b border-gray-200">
                {/* Left side: Avatar + text */}
                <View className="flex-row items-center gap-3">
                    <Image
                        source={{
                            uri: "https://randomuser.me/api/portraits/men/32.jpg",
                        }}
                        className="w-[48px] h-[48px] rounded-full"
                    />

                    <View className="">
                        <Text className="text-[18px] font-semibold text-black mb-1">Sam</Text>
                        <Text className="text-[12px] text-gray-500">Show profile</Text>
                    </View>
                </View>

                {/* Right arrow */}
                <ChevronRight size={20} color="#9CA3AF" />
            </TouchableOpacity>

            {/* Settings List */}
            <View className="px-2 mt-6 space-y-3">
                {/* Become a Host */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <Home size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Become a Host</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* My Bookings */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <CalendarDays size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">My Bookings</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* Payment */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <CreditCard size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Payment</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* Profile */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <User size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Profile</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* Notifications */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <Bell size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Notifications</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* Security */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <Shield size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Security</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* Language */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <Languages size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Language</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* Help Center */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <HelpCircle size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Help Center</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>

                {/* Invite Friends */}
                <TouchableOpacity className="py-2 px-4 flex-row items-center justify-between bg-accent/10 rounded-[10px]">
                    <View className="flex-row items-center gap-2">
                        <UserPlus size={20} color="#f97316" />
                        <Text className="text-lg font-medium text-black">Invite Friends</Text>
                    </View>
                    <ChevronRight size={20} color="#a3a3a3" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}