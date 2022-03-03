/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';

 import { stacked, rain, stackbar, donut, scatter } from './demo/stacked';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';


import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

import { ECharts } from "react-native-echarts-wrapper";

 const App: React.FC<any> = (): JSX.Element => {
   const lineOption1 = {
     xAxis: {
       type: "category",
       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
     },
     yAxis: {
       type: "value"
     },
     title: {
       text: 'Line Graph 1',
       show: true,
     },
     series: [
       {
         data: [820, 932, 901, 934, 1290, 1330, 1320],
         type: "line"
       }
     ]
   };

   const barOption1 = {
     xAxis: {
       type: "category",
       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
     },
     yAxis: {
       type: "value"
     },
     title: {
       text: 'Bar Graph 1',
       show: true,
     },
     series: [
       {
         data: [820, 932, 901, 934, 1290, 1330, 1320],
         type: "bar"
       }
     ]
   };


   const pieOption1 = {
     title: {
       text: 'Pie Graph 1',
       show: true,
     },
     series: [
       {

         data:[
           {value:335, name:'1'},
           {value:310, name:'2'},
           {value:234, name:'3'},
           {value:135, name:'4'},
           {value:1548, name:'5',
             itemStyle: {color: 'pink'},}
         ],
         type: "pie",
         itemStyle : {
           normal: {
             label: {
               show: true, position: 'inner'
             }
           }
         }
       }
     ]
   };

   return (
     <SafeAreaView>
       <StatusBar />
       <ScrollView
         styles={styles.parent}
         contentInsetAdjustmentBehavior="automatic">
         <View style={styles.chartContainer}>
           <ECharts
             option={lineOption1}
             backgroundColor="gray"
           />
         </View>
         <View style={styles.chartContainer}>
           <ECharts
             option={barOption1}
             backgroundColor="gray"
           />
         </View>
         <View style={styles.chartContainer}>
           <ECharts
             option={scatter}
             backgroundColor="gray"
           />
         </View>
         <View style={styles.chartContainer}>
           <ECharts
             option={pieOption1}
             backgroundColor="gray"
           />
         </View>
         <View style={styles.chartContainer}>
           <ECharts
             option={stacked}
             backgroundColor="gray"
           />
         </View>
         <View style={styles.chartContainer}>
           <ECharts
             option={rain}
             backgroundColor="gray"
           />
         </View>

         <View style={styles.chartContainer}>
           <ECharts
             option={stackbar}
             backgroundColor="gray"
           />
         </View>
         <View style={styles.chartContainer}>
           <ECharts
             option={donut}
             backgroundColor="gray"
           />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };

 // Examples are class-based components instead of functional.


 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   chartContainer: {
     flex: 1,
     height: 350
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   parent: {
     flexDirection: 'column',
     flex: 1
   }
 });

 export default App;
