import FeaturedSitterCard from "@/components/FeaturedSitterCard";
import SearchResult from "@/components/searchResultCard";
import { MapPin } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Search() {
  const [serviceFilter, setServiceFilter] = useState<"All" | "Boarding" | "Walking" | "Training">("All");
  const [petFilter, setPetFilter] = useState<"Both" | "Dog" | "Cat">("Both");

  const sitters = [
    {
      sitterName: "Priya Sharma",
      location: "Bandra West, Mumbai",
      services: "Boarding • Walking • Day Care",
      availability: "Weekdays & Weekends",
      price: "₹700 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/68.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1196865462260868560/original/302d5277-180b-415d-b19d-f13268ff96b9.jpeg?im_w=960",
      rating: "4.9",
      reviews: "52",
      isSuperhost: true,
    },
    {
      sitterName: "Ravi Patel",
      location: "Andheri East, Mumbai",
      services: "Walking • Training",
      availability: "Weekends only",
      price: "₹500 / walk",
      sitterImage: "https://randomuser.me/api/portraits/men/32.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQxMjg4MDk0Mzk4MTk1OTcwMw==/original/4384e9a2-b1a3-4a4e-a2eb-a05a37d28b35.jpeg?im_w=720",
      rating: "4.8",
      reviews: "37",
      isSuperhost: false,
      petTypes: ["Dog"],
    },
    {
      sitterName: "Neha Verma",
      location: "Powai, Mumbai",
      services: "Boarding • Day Care",
      availability: "All days",
      price: "₹800 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/45.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQxMjg4MDk0Mzk4MTk1OTcwMw==/original/5a64f140-dc45-4a49-89e2-f501cef2317c.png?im_w=960",
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
      coverImage:
        "https://a0.muscache.com/im/pictures/miso/Hosting-42612490/original/db4d50c8-03a6-49b1-b887-4c250f96f4a8.jpeg?im_w=720",
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
      coverImage:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/f7b49816-c88d-4ef7-b55d-840eabb8fee6.jpeg?im_w=1200",
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
      coverImage:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-53456218/original/156a0376-e585-41f2-a648-ca625eaed27d.jpeg?im_w=960",
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
      coverImage:
        "https://a0.muscache.com/im/pictures/miso/Hosting-38743211/original/2e886a15-338d-4314-bc3f-77b048073546.jpeg?im_w=1200",
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
      coverImage:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1030981205745706471/original/b5bf6ef7-59d7-489b-b774-d32797936296.png?im_w=1200",
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
      coverImage:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1244935667345318975/original/24ac1822-828a-4091-a19b-69a86098b88f.jpeg?im_w=960",
      rating: "4.8",
      reviews: "39",
      isSuperhost: false,
      petTypes: ["Dog"],
    },
  ];

  // filter logic
  const filteredSitters = useMemo(() => {
    return sitters.filter((s) => {
      if (serviceFilter !== "All") {
        const servicesArray = s.services.split("•").map((x) => x.trim());
        if (!servicesArray.includes(serviceFilter)) return false;
      }
      const petTypes = s.petTypes ?? ["Dog", "Cat"];
      if (petFilter !== "Both" && !petTypes.includes(petFilter)) return false;
      return true;
    });
  }, [sitters, serviceFilter, petFilter]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* search filter toggle btn  */}
        <View className="border-b pb-4 border-gray-300">
          <View className="px-6 mt-2">
            <View className="border border-gray-300 bg-white rounded-[6px] p-3 flex-row items-center overflow-hidden">
              {/* <SearchIcon size={20} color="#9CA3AF" /> */}
              <MapPin size={20} color="#9CA3AF" />
              <Text numberOfLines={1} ellipsizeMode="tail" className="text-[16px] text-gray-400 ml-2">
                Search by area or city
              </Text>
            </View>
          </View>
        </View>

        {/* Service Filters */}
        <View className="px-6 flex-row gap-2 mt-2">
          {["Boarding", "Walking", "Training"].map((type) => (
            <TouchableOpacity
              key={type}
              className={`flex-1 border px-3 py-2 rounded border-gray-300 ${
                serviceFilter === type ? "bg-gray-200" : ""
              }`}
              onPress={() => setServiceFilter(type as any)}
            >
              <Text className="text-center">{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pet Filters */}
        <View className="px-6 flex-row gap-2 mt-2 mb-4">
          {["Dog", "Cat", "Both"].map((type) => (
            <TouchableOpacity
              key={type}
              className={`flex-1 border px-3 py-2 rounded border-gray-300 ${
                petFilter === type ? "bg-gray-200" : ""
              }`}
              onPress={() => setPetFilter(type as any)}
            >
              <Text className="text-center">{type}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Search Results */}
        <View>
          {filteredSitters.map((item, index) => (
            <SearchResult key={index} {...item} />
          ))}
        </View>

        {/* Featured Sitters */}
        <View className="px-6">
          <View className="mt-6">
            <Text className="text-[18px] font-bold mb-3">Featured Sitters</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredSitters.slice(0, 5).map((item, index) => (
                <FeaturedSitterCard key={index} {...item} />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
