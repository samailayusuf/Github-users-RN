import React from "react";
import { Platform, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
const BannerAd = () => {
  const unitID = Platform.select({
    android: "ca-app-pub-1308691032911883/8777180748",
  });
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AdMobBanner
        bannerSize="banner"
        adUnitID={unitID}
        servePersonalizedAds={false}
        onDidFailToReceiveAdWithError = {
            (errorCode) => console.log(errorCode )
         }
        style={{
          padding: 30,
        }}
      />
    </View>
  );
};
 
export default BannerAd;
