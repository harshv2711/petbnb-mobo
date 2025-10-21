import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const sitterProfile = () => {
  return (
    <SafeAreaView>
      <View className='relative'>
        <ScrollView>
          <View className='px-6 pt-8'>
            <Text className="text-[28px] font-bold text-black leading-tight mb-3">
              Harsh Vishwakarma
            </Text>
            <View className="self-start mb-3">
              <Text className="border border-gray-300 px-3 py-1 rounded-full text-[14px] font-semibold text-black">
                PetBnB Superhost 🐾
              </Text>
            </View>
            <Text className="text-[16px] text-gray-700 leading-[24px] font-medium">
              I've been caring for dogs and cats for over 5 years your pet will feel right at home.
            </Text>

            <View className='flex-row my-6 gap-1'>
              <View className='border rounded-lg border-gray-300 p-3 flex-1 justify-center gap-1'>
                <Text className='text-center font-bold text-[24px] text-gray-700'>499</Text>
                <Text className='text-center leading-[] text-[12px] text-gray-700'>Reviews</Text>
              </View>
              <View className='border rounded-lg border-gray-300 p-3 flex-1 justify-center gap-1'>
                <Text className='text-center font-bold text-[24px] text-gray-700'>4.9</Text>
                <Text className='text-center leading-[] text-[12px] text-gray-700'>Rating</Text>
              </View>
              <View className='border rounded-lg border-gray-300 p-3 flex-1 justify-center gap-1'>
                <Text className='text-center font-bold text-[24px] text-gray-700'>2</Text>
                <Text className='text-center leading-[] text-[12px] text-gray-700'>Years hosting</Text>
              </View>
            </View>
          </View>

          {/* Services Offered  */}
          <View className='px-6'>
            <Text className='font-bold text-[16px] leading-[24px] mb-3'>Service Offered</Text>
            <View className='flex-row justify-between'>
              <Text className='text-[16px] leading-[24px] text-gray-700 font-medium'>Boarding</Text>
              <Text className='text-[16px] leading-[24px] text-gray-700 font-medium'>₹999 / Per day</Text>
            </View>

            <View className='flex-row justify-between'>
              <Text className='text-[16px] leading-[24px] text-gray-700 font-medium'>Walking</Text>
              <Text className='text-[16px] leading-[24px] text-gray-700 font-medium'>₹299 / Per hour</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className='text-[16px] leading-[24px] text-gray-700 font-medium'>Training</Text>
              <Text className='text-[16px] leading-[24px] text-gray-700 font-medium'>₹1299 / Per Session</Text>
            </View>
          </View>
          {/* Languages */}
          <View className='px-6 py-3 mt-6 items-start gap-1 border border-gray-300'>
            <Text className='font-bold text-[16px] leading-[24px]'>Languages:</Text>
            <Text className="text-[16px] text-gray-700 leading-[22px] font-medium ">
              English, Hindi, Marathi
            </Text>
          </View>
          <View className='px-6 py-3 items-start gap-1 border border-gray-300 border-t-0 flex-row items-center justify-between'>
            <Text className='font-bold text-[16px] leading-[24px]'>Number of Pets Hosted at a Time:</Text>
            <Text className="text-[16px] text-gray-700 leading-[22px] font-medium">
              2
            </Text>
          </View>
          {/* Pet Preferences */}
          <View className='px-6 py-3 items-start gap-1 border border-gray-300 border-t-0'>
            <Text className='font-bold text-[16px] leading-[24px]'>Pet Preferences:</Text>
            <View className='flex-row justify-between'>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium flex-1">
                Pet Type:
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium ">
                Dog, Cat, Both
              </Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium flex-1">
                Pet Size Accepted:
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium ">
                Small, Medium, Large
              </Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium flex-1">
                Age Range:
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium ">
                Puppy, Adult, Senior
              </Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium flex-1">
                Special Needs / Medical Pets Accepted?
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[22px] font-medium ">
                Yes
              </Text>
            </View>

          </View>

          {/* Certifications / Training section */}
          <View className="px-6 py-4">
            <Text className="text-[22px] font-bold text-black mb-3">
              Certifications & Training
            </Text>

            <View className="flex-row flex-wrap gap-2">
              {[
                "Pet First Aid Certified",
                "Animal Behavior Training",
                "Grooming & Hygiene Course",
                "Volunteer - PawSafe Shelter",
              ].map((item) => (
                <Text
                  key={item}
                  className="border border-gray-300 px-3 py-1 rounded-full text-[14px] text-gray-700"
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
          <View className='h-[120px]'></View>
        </ScrollView>

        <View className='absolute bottom-0 left-0 right-0 px-8 py-3'>
          <Link href="./checkout" asChild>
            <TouchableOpacity className="border shadow border-black rounded-full py-4 bg-black">
              <Text className="text-white text-center text-[16px] font-semibold">
                Book now
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default sitterProfile