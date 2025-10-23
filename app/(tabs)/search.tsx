import FeaturedSitterCard from "@/components/FeaturedSitterCard";
import SearchResult from "@/components/searchResultCard";
import { Cat, Dog, Dumbbell, Footprints, Home, MapPin, PawPrint } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Search() {
  const [serviceFilter, setServiceFilter] = useState<"All" | "Boarding" | "Walking" | "Training">("All");
  const [petFilter, setPetFilter] = useState<"Dog & Cat" | "Dog" | "Cat">("Dog & Cat");

  const sitters = [
    {
      sitterName: "Priya Sharma",
      location: "Bandra West, Mumbai",
      services: "Boarding • Walking • Day Care",
      petType: "Dog & Cat",
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
      petType: "Dog",
      availability: "Weekends only",
      price: "₹500 / walk",
      sitterImage: "https://randomuser.me/api/portraits/men/32.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQxMjg4MDk0Mzk4MTk1OTcwMw==/original/4384e9a2-b1a3-4a4e-a2eb-a05a37d28b35.jpeg?im_w=720",
      rating: "4.8",
      reviews: "37",
      isSuperhost: false,
    },
    {
      sitterName: "Neha Verma",
      location: "Powai, Mumbai",
      services: "Boarding • Day Care",
      petType: "Dog & Cat",
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
      petType: "Dog & Cat",
      availability: "Weekdays only",
      price: "₹450 / walk",
      sitterImage: "https://randomuser.me/api/portraits/men/41.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/1bc4c49a-2fa5-41af-b3b7-9ed8e7f2b5b7.jpg?im_w=720",
      rating: "4.7",
      reviews: "29",
      isSuperhost: false,
    },
    {
      sitterName: "Ritika Mehta",
      location: "Juhu, Mumbai",
      services: "Boarding • Grooming • Walking",
      petType: "Dog & Cat",
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
      petType: "Dog",
      availability: "Evenings only",
      price: "₹600 / session",
      sitterImage: "https://randomuser.me/api/portraits/men/73.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/f7b49816-c88d-4ef7-b55d-840eabb8fee6.jpeg?im_w=1200",
      rating: "4.8",
      reviews: "33",
      isSuperhost: false,
    },
    {
      sitterName: "Aisha Khan",
      location: "Worli, Mumbai",
      services: "Day Care • Boarding",
      petType: "Dog & Cat",
      availability: "All days",
      price: "₹850 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/54.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-53456218/original/156a0376-e585-41f2-a648-ca625eaed27d.jpeg?im_w=960",
      rating: "5.0",
      reviews: "72",
      isSuperhost: true,
    },
    {
      sitterName: "Rohit Nair",
      location: "Kandivali East, Mumbai",
      services: "Walking • Boarding",
      petType: "Dog & Cat",
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
      petType: "Dog & Cat",
      availability: "Weekdays & Weekends",
      price: "₹900 / night",
      sitterImage: "https://randomuser.me/api/portraits/women/30.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1030981205745706471/original/b5bf6ef7-59d7-489b-b774-d32797936296.png?im_w=1200",
      rating: "4.9",
      reviews: "58",
      isSuperhost: true,
    },
    {
      sitterName: "Vikram Joshi",
      location: "Thane, Mumbai",
      services: "Training • Walking",
      petType: "Dog",
      availability: "Flexible hours",
      price: "₹700 / session",
      sitterImage: "https://randomuser.me/api/portraits/men/58.jpg",
      coverImage:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1244935667345318975/original/24ac1822-828a-4091-a19b-69a86098b88f.jpeg?im_w=960",
      rating: "4.8",
      reviews: "39",
      isSuperhost: false,
    },
  ];

  // filter logic (fixed: petType is a string; "Both" label maps to "Dog & Cat")
  const filteredSitters = useMemo(() => {
    return sitters.filter((s) => {
      // Service filter
      if (serviceFilter !== "All") {
        const servicesArray = s.services.split("•").map((x) => x.trim());
        if (!servicesArray.includes(serviceFilter)) return false;
      }

      // Pet filter
      const current = (s.petType || "Dog & Cat").toLowerCase(); // e.g., "dog & cat", "dog", "cat"
      if (petFilter === "Dog & Cat") return true;
      if (petFilter === "Dog" && current.includes("dog")) return true;
      if (petFilter === "Cat" && current.includes("cat")) return true;
      return false;
    });
  }, [sitters, serviceFilter, petFilter]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Search box */}
        <View>
          {/* location  */}
          <View className="border-b border-gray-300 pb-4 flex-row items-center mt-3">
            <View className="pl-6 pr-3 flex-1">
              <View className="flex-row items-center p-3 rounded-[6px] bg-black/5 border border-gray-300 overflow-hidden">
                <MapPin size={20} color="#9CA3AF" />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  className="ml-2 text-[16px] text-gray-400"
                >
                  Search by area or city
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => { setServiceFilter("Boarding"); setPetFilter("Dog & Cat") }}
              className="h-11 mr-6 border rounded-full border-gray-300 py-0 px-4 flex-col justify-center items-center"
            >
              <Text className="text-[14px] text-center m-0 p-0">Clear</Text>
            </TouchableOpacity>
          </View>

          {/* Service Filters */}
          <View className="px-6 flex-row gap-2 mt-2">
            {[
              { type: "Boarding", icon: Home },
              { type: "Walking", icon: Footprints },
              { type: "Training", icon: Dumbbell },
            ].map(({ type, icon: Icon }) => (
              <TouchableOpacity
                key={type}
                className={`flex-1 border px-3 py-2 rounded border-gray-300 ${serviceFilter === type ? "bg-gray-200" : ""
                  }`}
                onPress={() => setServiceFilter(type as any)}
              >
                <View className="flex-row justify-center items-center gap-1">
                  <Icon size={16} color="#000" />
                  <Text className="text-center">{type}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Pet Filters (label 'Both' maps to value 'Dog & Cat') */}
          <View className="px-6 flex-row gap-2 mt-2 mb-4">
            {[
              { label: "Dog", value: "Dog", icon: Dog },
              { label: "Cat", value: "Cat", icon: Cat },
              { label: "Both", value: "Dog & Cat", icon: PawPrint },
            ].map(({ label, value, icon: Icon }) => (
              <TouchableOpacity
                key={label}
                className={`flex-1 border px-3 py-2 rounded border-gray-300 ${petFilter === (value as any) ? "bg-gray-200" : ""
                  }`}
                onPress={() => setPetFilter(value as any)}
              >
                <View className="flex-row justify-center items-center gap-1">
                  <Icon size={16} color="#000" />
                  <Text className="text-center">{label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
