import React from 'react'
import { View,Text ,StyleSheet, FlatList,TouchableOpacity, ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import activitiesData from '../assets/data/activitiesData'
import discoverCategoriesData from '../assets/data/discoverCategories'
import learnMoreData from '../assets/data/learnMore'
import discoverData from '../assets/data/discoverData'
import { ScrollView,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'
export default function Home() {

  const renderLearnMoreItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === 'learnMore-1' ? 20 : 0,
          },
        ]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };


const renderActivityItem=({item})=>{

  console.log(item.image.uri) 
  return (
    <View style={styles.activitiesItemWrapper}>
      <Image source={{uri:item.image.uri}} style={styles.activityItemImage}/>
      <Text style={styles.activityItemText}>{item.title}</Text>
    </View>
  )
}
  const renderDiscoverItem=({item})=>{
    
    return(
<TouchableOpacity onPress={()=>{navigation.navigate("Details",{item:item})}}>
  <ImageBackground source={{uri:item.image.uri}} style={styles.discoverItem}
    imageStyle={styles.discoverItemImage}
  />
  <Text style={styles.discoverItemTitle}>{item.title}</Text>
  <View style={styles.discoverItemTextWrapper}>
    <Entypo name="location-pin" size={18} color={"black"}/>
    <Text style={styles.discoverItemLocationText}>{item.location}</Text>
  </View>
</TouchableOpacity>
    )
  }
  const navigation=useNavigation()
  return (
<View style={styles.container}>
<ScrollView>
  <SafeAreaView>
    <View style={styles.menuWrapper}>
    <Feather name="menu" size={32} color={"black"} style={styles.menuIcon}/>
    <Image source={{uri:"https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}} style={styles.profileImg}/>

    </View>
  </SafeAreaView>

<View style={styles.discoverWrapper}>
<Text style={styles.dicoverTitle}>Discover</Text>


<View style={styles.discovercategoryWrapper}>
  <Text style={[styles.discoverCategoryTitle,{color:"orange"}]}>All</Text>
  <Text style={styles.discoverCategoryTitle}>Destination</Text>
  <Text style={styles.discoverCategoryTitle}>Cities</Text>
  <Text style={styles.discoverCategoryTitle}>Experiences</Text>
  
</View>

<View style={styles.dicoverItemsWrapper}>
  <FlatList data={discoverData} renderItem={renderDiscoverItem}
  keyExtractor={({item})=>item?.id}
    showsHorizontalScrollIndicator={false} horizontal={true}
  /> 
</View>
</View>




<View style={styles.activitiesWrapper}>
  <Text style={styles.activitiesTitle}>Activities</Text>
  <View style={styles.activitiesItemsWrapper}>
    <FlatList data={activitiesData} renderItem={renderActivityItem}
      keyExtractor={({item})=>item?.id}
  horizontal={true}
  showsHorizontalScrollIndicator={false}
    />
  </View>
</View>


<View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

</ScrollView>
</View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    color:"white"
  },
  menuWrapper:{
marginHorizontal:20,
marginTop:20,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
  },profileImg:{
    width:52,
    height:52,
    borderRadius:10
  },
  discoverWrapper:{
    marginHorizontal:20,marginTop:20,
   
  },
  discoverTitle:{
    marginHorizontal:20,
    fontSize:20
  },
  discovercategoryWrapper:{
    marginHorizontal:20,
    flexDirection:"row",marginTop:20,justifyContent:"space-between"
  },
  discoverCategoryTitle:{
    fontSize:16,color:"grey"
  },
  discoverItem:{
    width:170,height:250,
    justifyContent:"flex-end",
    paddingHorizontal:10,
    paddingVertical:15,
    marginRight:20,
    
  },
  discoverItemImage:{
    borderRadius:20
  },
  discoverItemTextWrapper:{
  alignItems:"center",
  marginTop:5,
  flexDirection:"row"},
  discoverItemLocationText:{
    fontWeight:"bold",
    fontSize:14,marginLeft:5
  },
  discoverItemsWrapper:{
    paddingVertical:20
  },
  activitiesWrapper:{
    marginTop:10
  },
  activitiesTitle:{
    marginHorizontal:20,
    fontSize:24,
    fontWeight:"bold",color:"black"
  },
  activitiesItemWrapper:{
justifyContent:"flex-end",alignItems:"center",
marginRight:20,
  },
  activityItemImage:{
    width:36
  },
  activityItemText:{
    marginTop:5,
    fontSize:14,color:"grey"
  },activitiesItemsWrapper:{
    alignItems:"center"
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    
    fontSize: 24,
    color: "black",
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },

  learnMoreItemText: {
   
    fontSize: 18,
    color: "white",
    marginHorizontal: 10,
    marginVertical: 20,
  },

})