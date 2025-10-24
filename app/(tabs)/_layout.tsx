import { Tabs } from "expo-router"
import TabIcon from "../../components/TabIcon"

export default function TabsLayout(){
  return (
    <Tabs
    screenOptions={
      {
        tabBarShowLabel:true,
        tabBarStyle: {
          backgroundColor:"#181818",
          marginBottom:0,
          borderRadius:0,
          padding:0,
          marginHorizontal:0,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'row',
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        }
      }
    }>
      <Tabs.Screen 
      name="index" 
      options={{title:"Home", headerShown: false, tabBarIcon:({focused})=>(
        <TabIcon 
          focused={focused}
          iconUrl="https://img.icons8.com/fluency-systems-regular/48/home--v1.png"
        />
      ) }}>
      </Tabs.Screen>
      <Tabs.Screen 
        name="search" 
        options={
          {
            title:"Search", 
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabIcon 
                focused={focused}
                iconUrl="https://img.icons8.com/ios-glyphs/30/search--v1.png"
              />
            ) 
          }
        }>
      </Tabs.Screen>

      <Tabs.Screen 
        name="bookings" 
        options={
          {
            title:"Booking", 
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabIcon 
                focused={focused}
                iconUrl="https://img.icons8.com/ios-glyphs/30/calendar--v1.png"
              />
            ) 
          }
        }>
      </Tabs.Screen>

      <Tabs.Screen 
        name="userProfile" 
        options={
          {
            title:"Manage Account", 
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabIcon 
                focused={focused}
                iconUrl="https://img.icons8.com/ios-glyphs/30/user--v1.png"
              />
            ) 
          }
        }>
      </Tabs.Screen>
      <Tabs.Screen 
        name="petProfileListScreen" 
        options={
          {
            title:"Manage Account", 
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabIcon 
                focused={focused}
                iconUrl="https://img.icons8.com/glyph-neue/64/FFFFFF/cat-footprint.png"
              />
            ) 
          }
        }>
      </Tabs.Screen>
    </Tabs>
  )
}
