import SearchResult from "@/components/searchResultCard";
import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
const { width } = Dimensions.get("window");

export default function searchResultScreen() {

  const sitters = [
    {
      sitterName: "Priya Sharma",
      location: "Bandra West, Mumbai",
      services: "Boarding • Walking • Day Care",
      availability: "Weekdays & Weekends",
      price: "₹700 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/68.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/miso/Hosting-1196865462260868560/original/302d5277-180b-415d-b19d-f13268ff96b9.jpeg?im_w=960",
      rating: "4.9",
      reviews: "52",
      isSuperhost: true,
      // petTypes: ["Dog", "Cat"], // optional; defaults to both if omitted
    },
    {
      sitterName: "Ravi Patel",
      location: "Andheri East, Mumbai",
      services: "Walking • Training",
      availability: "Weekends only",
      price: "₹500 / walk",
      sitterImage: "https://randomuser.me/api/portraits/men/32.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQxMjg4MDk0Mzk4MTk1OTcwMw==/original/4384e9a2-b1a3-4a4e-a2eb-a05a37d28b35.jpeg?im_w=720",
      rating: "4.8",
      reviews: "37",
      isSuperhost: false,
      petTypes: ["Dog"], // example if you add it
    },
    {
      sitterName: "Neha Verma",
      location: "Powai, Mumbai",
      services: "Boarding • Day Care",
      availability: "All days",
      price: "₹800 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/45.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQxMjg4MDk0Mzk4MTk1OTcwMw==/original/5a64f140-dc45-4a49-89e2-f501cef2317c.png?im_w=960",
      rating: "5.0",
      reviews: "65",
      isSuperhost: true,
    },
    {
      sitterName: "Amit Deshmukh",
      location: "Vile Parle, Mumbai",
      services: "Walking • Day Care",
      availability: "Weekdays only",
      price: "₹450 / walk",
      sitterImage: "https://randomuser.me/api/portraits/men/41.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/1bc4c49a-2fa5-41af-b3b7-9ed8e7f2b5b7.jpg?im_w=720",
      rating: "4.7",
      reviews: "29",
      isSuperhost: false,
      petTypes: ["Dog", "Cat"],
    },
    {
      sitterName: "Ritika Mehta",
      location: "Juhu, Mumbai",
      services: "Boarding • Grooming • Walking",
      availability: "Weekends only",
      price: "₹950 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/26.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/miso/Hosting-42612490/original/db4d50c8-03a6-49b1-b887-4c250f96f4a8.jpeg?im_w=720",
      rating: "4.9",
      reviews: "41",
      isSuperhost: true,
    },
    {
      sitterName: "Karan Bhosale",
      location: "Goregaon West, Mumbai",
      services: "Training • Walking",
      availability: "Evenings only",
      price: "₹600 / session",
      sitterImage: "https://randomuser.me/api/portraits/men/73.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/f7b49816-c88d-4ef7-b55d-840eabb8fee6.jpeg?im_w=1200",
      rating: "4.8",
      reviews: "33",
      isSuperhost: false,
      petTypes: ["Dog"],
    },
    {
      sitterName: "Aisha Khan",
      location: "Worli, Mumbai",
      services: "Day Care • Boarding",
      availability: "All days",
      price: "₹850 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/54.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-53456218/original/156a0376-e585-41f2-a648-ca625eaed27d.jpeg?im_w=960",
      rating: "5.0",
      reviews: "72",
      isSuperhost: true,
      petTypes: ["Dog", "Cat"],
    },
    {
      sitterName: "Rohit Nair",
      location: "Kandivali East, Mumbai",
      services: "Walking • Boarding",
      availability: "Morning & Evening",
      price: "₹550 / walk",
      sitterImage: "https://randomuser.me/api/portraits/men/67.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/miso/Hosting-38743211/original/2e886a15-338d-4314-bc3f-77b048073546.jpeg?im_w=1200",
      rating: "4.6",
      reviews: "24",
      isSuperhost: false,
    },
    {
      sitterName: "Sneha Kulkarni",
      location: "Malad West, Mumbai",
      services: "Boarding • Day Care • Training",
      availability: "Weekdays & Weekends",
      price: "₹900 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/30.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/miso/Hosting-1030981205745706471/original/b5bf6ef7-59d7-489b-b774-d32797936296.png?im_w=1200",
      rating: "4.9",
      reviews: "58",
      isSuperhost: true,
      petTypes: ["Dog", "Cat"],
    },
    {
      sitterName: "Vikram Joshi",
      location: "Thane, Mumbai",
      services: "Training • Walking",
      availability: "Flexible hours",
      price: "₹700 / session",
      sitterImage: "https://randomuser.me/api/portraits/men/58.jpg",
      coverImage: "https://a0.muscache.com/im/pictures/miso/Hosting-1244935667345318975/original/24ac1822-828a-4091-a19b-69a86098b88f.jpeg?im_w=960",
      rating: "4.8",
      reviews: "39",
      isSuperhost: false,
      petTypes: ["Dog"],
    },
  ];
  
  

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="px-6 py-8">
          <Text className="text-[28px] font-bold text-black leading-tight mb-3">
            Find Trusted Hosts
          </Text>
          <Text className="text-[16px] text-gray-600 leading-[22px]">
            Choose your location, pet type, and the services you need — and we’ll
            find the perfect sitter for your furry friend.
          </Text>
        </View>

        {/* Search Result Section */}
        {sitters.map((item, index) => (
          <SearchResult key={index} {...item} />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}
