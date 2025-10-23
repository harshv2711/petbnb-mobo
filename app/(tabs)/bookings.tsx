import BookingCard from "@/components/BookingCard";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bookings() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row gap-2 px-6 py-6 border-b border-gray-300">
               <Text className="text-[22px] font-bold">My Bookings</Text>
            </View>

            {/* all booking  */}
            <View>
                {/* booking card  */}
                <BookingCard
                    sitterName="Priya Sharma"
                    sitterImage="https://randomuser.me/api/portraits/women/68.jpg"
                    location="Bandra West, Mumbai"
                    serviceType="Boarding • 2 Nights"
                    startDate="Oct 25, 2025"
                    endDate="Oct 27, 2025"
                    petName="Buddy"
                    price="₹1400 total"
                    status="Confirmed"
                />
                <BookingCard
                    sitterName="Priya Sharma"
                    sitterImage="https://randomuser.me/api/portraits/women/68.jpg"
                    location="Bandra West, Mumbai"
                    serviceType="Boarding • 2 Nights"
                    startDate="Oct 25, 2025"
                    endDate="Oct 27, 2025"
                    petName="Buddy"
                    price="₹1400 total"
                    status="Confirmed"
                />
            </View>
        </SafeAreaView>
    );
}
