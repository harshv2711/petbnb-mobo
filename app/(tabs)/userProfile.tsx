import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserProfile() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Cover Image */}
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/1200x/d7/37/e7/d737e7dd6cc427e606852cca820c9ea5.jpg",
        }}
        className="w-full h-[180px] justify-end items-center"
        resizeMode="cover"
      >
        {/* Profile Image */}
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/b6/26/0b/b6260b8874ea6a74afc3c6c35912fedf.jpg",
          }}
          className="w-[120px] h-[120px] rounded-full border-[6px] border-white mb-[-50px]"
          resizeMode="cover"
        />
      </ImageBackground>

      {/* User Info */}
      <View className="mt-[60px] flex-col items-center px-6">
        <Text className="text-[22px] font-semibold mb-1 text-black">John Doe</Text>
        <Text className="text-[14px] text-gray-600 mb-[2px]">johndoe@pivotmkg.com</Text>
        <Text className="text-[14px] text-gray-600">+91 9876543210</Text>
      </View>
      
    </SafeAreaView>
  );
}
