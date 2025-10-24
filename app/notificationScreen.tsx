import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function NotificationScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="p-6">
                    <Text className="text-[24px] font-primaryBold">Notification</Text>
                </View>
                <View className="px-6">
                    {/* message card  */}
                    <View className="p-3 border border-gray-300 rounded mb-2">
                        <View>
                            <Image></Image>
                            <Text className="text-[14px] font-primaryBold mb-1">PetBnb</Text>
                        </View>
                        <Text className="text-[14px] text-gray-700 leading-[20px]">
                            Booking Confirmed: <Text className="font-semibold">Bruno’s Stay</Text> from <Text className="font-semibold">Oct 28–30</Text>.
                            Get ready to welcome your furry guest!
                        </Text>
                    </View>
                    {/* message card  */}
                    <View className="p-3 border border-gray-300 rounded mb-2">
                        <View>
                            {/* profile image  */}
                            <Image></Image>
                            <Text className="text-[14px] font-primaryBold mb-1">PetBnb Support Team</Text>
                        </View>
                        <Text className="text-[14px] text-gray-700 leading-[20px]">
                            Hi <Text className="font-semibold">Harsh</Text>, your recent booking with <Text className="font-semibold">Coco’s Walk</Text> has been confirmed. 
                        Please make sure to review the sitter’s details and keep chat notifications on for updates.
                        </Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}