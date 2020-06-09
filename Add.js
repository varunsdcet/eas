import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    Modal,
    FlatList,
    Dimensions,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Button from 'react-native-button';
const window = Dimensions.get('window');
const GLOBAL = require('./Global');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tab:0,
          duration:0,
            repeatArr:[
            {
                name:'Everyday',
                is_sel: 1,
            },
            {
                name:'Alternate Days',
                is_sel: 0,
            },
            {
                name:'Night',
                is_sel: 0,
            },
            ],
            timeArr:[
            {
                name:'Morning',
                is_sel: 1,
            },
            {
                name:'Afternoon',
                is_sel: 0,
            },
            {
                name:'Night',
                is_sel: 0,
            },
            ],
            tobeArr:[
            {
                name:'After Food',
                is_sel: 1,
            },
            {
                name:'Before Food',
                is_sel: 0,
            },
            ],
            mainArray:[
             {
               name:'',
               dosage:1,
               duration:1,
               repeatArr:[
               {
                   name:'Everyday',
                   is_sel: 1,
               },
               {
                   name:'Alternate Days',
                   is_sel: 0,
               },
               {
                   name:'Night',
                   is_sel: 0,
               },
               ],
               timeArr:[
               {
                   name:'Morning',
                   is_sel: 1,
               },
               {
                   name:'Afternoon',
                   is_sel: 0,
               },
               {
                   name:'Night',
                   is_sel: 0,
               },
               ],
               tobeArr:[
               {
                   name:'After Food',
                   is_sel: 1,
               },
               {
                   name:'Before Food',
                   is_sel: 0,
               },
               ],



             }


            ]

        };

    }

    componentWillUnmount() {

    }


    showLoading() {
        this.setState({loading: true})
    }


    hideLoading() {
        this.setState({loading: false})
    }

    _handleStateChange = (state) => {
        // this.getMembers()
    }

    componentDidMount(){
        // this.getMembers()
         this.props.navigation.addListener('willFocus',this._handleStateChange);

    }

    onSelectTimes=(item, index,main)=>{

       var a = this.state.mainArray[main].tobeArr
        for (var i = 0; i<this.state.mainArray[main].tobeArr.length ;i ++){

            this.state.mainArray[main].tobeArr.is_sel = 0
              this.state.mainArray[main].tobeArr[i].is_sel = 0
        }

        var indexs = a[index]
        if (indexs.is_sel == 0){
            indexs.is_sel = 1
        //    this.setState({address_id : item.id})

        }else{
            indexs.is_sel = 0
        }
        //alert(JSON.stringify(index))
        this.state.mainArray[main].tobeArr[index] = indexs



        this.setState({mainArray:this.state.mainArray})
    }

    onSelectTime=(item, index,main)=>{

       var a = this.state.mainArray[main].timeArr
        for (var i = 0; i<this.state.mainArray[main].timeArr.length ;i ++){

            this.state.mainArray[main].timeArr.is_sel = 0
              this.state.mainArray[main].timeArr[i].is_sel = 0
        }

        var indexs = a[index]
        if (indexs.is_sel == 0){
            indexs.is_sel = 1
        //    this.setState({address_id : item.id})

        }else{
            indexs.is_sel = 0
        }
        //alert(JSON.stringify(index))
        this.state.mainArray[main].timeArr[index] = indexs



        this.setState({mainArray:this.state.mainArray})
    }


    onSelect=(item, index,main)=>{

       var a = this.state.mainArray[main].repeatArr
        for (var i = 0; i<this.state.mainArray[main].repeatArr.length ;i ++){

            this.state.mainArray[main].repeatArr.is_sel = 0
              this.state.mainArray[main].repeatArr[i].is_sel = 0
        }

        var indexs = a[index]
        if (indexs.is_sel == 0){
            indexs.is_sel = 1
        //    this.setState({address_id : item.id})

        }else{
            indexs.is_sel = 0
        }
        //alert(JSON.stringify(index))
        this.state.mainArray[main].repeatArr[index] = indexs



        this.setState({mainArray:this.state.mainArray})
    }

    _renderItems=({item, index})=>{

        return(
        <TouchableOpacity
        onPress={()=> this.onSelect(item, index)}>
        {item.is_sel != 1 &&(

          <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
           borderWidth:2, padding:5, backgroundColor: 'white' ,justifyContent:'center',
            marginLeft:wp('1%'), marginRight:wp(1)}}>

          <Text style = {{color:'gray',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
          alignSelf:'center', textAlign:'center' }}>
          {item.name}
          </Text>
          </View>

            )}

        {item.is_sel==1 && (

          <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
           borderWidth:2, padding:5, backgroundColor: '#1976D2' ,justifyContent:'center',
            marginLeft:wp('1%'), marginRight:wp(1)}}>

          <Text style = {{color:'white',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
          alignSelf:'center', textAlign:'center'  }}>
          {item.name}
          </Text>
          </View>

            )}

          </TouchableOpacity>
        )
    }


    onSelectTobe=(item, index)=>{
       var a = this.state.tobeArr
        for (var i = 0; i<this.state.tobeArr.length ;i ++){

            this.state.tobeArr[i].is_sel = 0
        }
        var index = a[index]
        if (index.is_sel == 0){
            index.is_sel = 1
            this.setState({address_id : item.id})

        }else{
            index.is_sel = 0
        }
        this.state.tobeArr[index] = index
        this.setState({tobeArr:this.state.tobeArr,
          sel_bloodGroup: item})
    }

    _renderItemsTobe=({item, index})=>{

        return(
        <TouchableOpacity
        onPress={()=> this.onSelectTobe(item, index)}>
        {item.is_sel != 1 &&(

          <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
           borderWidth:2, padding:5, backgroundColor: 'white' ,justifyContent:'center',
            marginLeft:wp('1%'), marginRight:wp(1)}}>

          <Text style = {{color:'gray',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
          alignSelf:'center', textAlign:'center' }}>
          {item.name}
          </Text>
          </View>

            )}

        {item.is_sel==1 && (

          <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
           borderWidth:2, padding:5, backgroundColor: '#1976D2' ,justifyContent:'center',
            marginLeft:wp('1%'), marginRight:wp(1)}}>

          <Text style = {{color:'white',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
          alignSelf:'center', textAlign:'center'  }}>
          {item.name}
          </Text>
          </View>

            )}

          </TouchableOpacity>
        )
    }



    adds = (i) =>{

    var tab = this.state.mainArray[i].duration + 1
    var setvalue = this.state.mainArray[i]

    setvalue.duration = tab
    this.state.mainArray[i] =  setvalue

    this.setState({mainArray:this.state.mainArray})
    }

    minuss = (i) =>{
      if (this.state.mainArray[i].duration  == 0){
        return
      }

    var tab = this.state.mainArray[i].duration - 1
    var setvalue = this.state.mainArray[i]

    setvalue.duration = tab
    this.state.mainArray[i] =  setvalue

    this.setState({mainArray:this.state.mainArray})
    }



add = (i) =>{

var tab = this.state.mainArray[i].dosage + 1
var setvalue = this.state.mainArray[i]

setvalue.dosage = tab
this.state.mainArray[i] =  setvalue

this.setState({mainArray:this.state.mainArray})
}

myselect = () =>{

  let newly_added_data = {
    name:'',
                 dosage:1,
                 duration:1,
                 repeatArr:[
                 {
                     name:'Everyday',
                     is_sel: 1,
                 },
                 {
                     name:'Alternate Days',
                     is_sel: 0,
                 },
                 {
                     name:'Night',
                     is_sel: 0,
                 },
                 ],
                 timeArr:[
                 {
                     name:'Morning',
                     is_sel: 1,
                 },
                 {
                     name:'Afternoon',
                     is_sel: 0,
                 },
                 {
                     name:'Night',
                     is_sel: 0,
                 },
                 ],
                 tobeArr:[
                 {
                     name:'After Food',
                     is_sel: 1,
                 },
                 {
                     name:'Before Food',
                     is_sel: 0,
                 },
                 ],



               }

  this.setState({
        mainArray: [...this.state.mainArray, newly_added_data]
    });


}
minus = (i) =>{
  if (this.state.mainArray[i].dosage == 0){
    return
  }

var tab = this.state.mainArray[i].dosage - 1
var setvalue = this.state.mainArray[i]

setvalue.dosage = tab
this.state.mainArray[i] =  setvalue
this.setState({tab:tab})
this.setState({mainArray:this.state.mainArray})
}



    _renderItemsTime=({item, index})=>{

        return(
        <TouchableOpacity
        onPress={()=> this.onSelectTime(item, index)}>
        {item.is_sel != 1 &&(

          <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
           borderWidth:2, padding:5, backgroundColor: 'white' ,justifyContent:'center',
            marginLeft:wp('1%'), marginRight:wp(1)}}>

          <Text style = {{color:'gray',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
          alignSelf:'center', textAlign:'center' }}>
          {item.name}
          </Text>
          </View>

            )}

        {item.is_sel==1 && (

          <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
           borderWidth:2, padding:5, backgroundColor: '#1976D2' ,justifyContent:'center',
            marginLeft:wp('1%'), marginRight:wp(1)}}>

          <Text style = {{color:'white',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
          alignSelf:'center', textAlign:'center'  }}>
          {item.name}
          </Text>
          </View>

            )}

          </TouchableOpacity>
        )
    }
myselectiom = () =>{
  console.log(JSON.stringify(this.state.mainArray))
  alert(JSON.stringify(this.state.mainArray))

var name = ""
  for(var i = 0 ; i < this.state.mainArray.length ; i++){
    name  =  name +  this.state.mainArray[i].name + ',' + this.state.mainArray[i].dosage + ','  + this.state.mainArray[i].duration + ","
    for (var j = 0;j < this.state.mainArray[i].repeatArr.length ;j++){
      if (this.state.mainArray[i].repeatArr[j]. is_sel == 1){
        name =  name +  this.state.mainArray[i].repeatArr[j].name + ','
      }
    }

    for (var k = 0; k < this.state.mainArray[i].timeArr.length ;k++){
      if (this.state.mainArray[i].timeArr[k]. is_sel == 1){
        name =  name +  this.state.mainArray[i].timeArr[k].name + ','
      }
    }

    for (var m = 0; m < this.state.mainArray[i].timeArr.length ;m++){
      if (this.state.mainArray[i].timeArr[m].is_sel == 1){
        name =  name +  this.state.mainArray[i].timeArr[m].name + ','
      }
    }

  }


  alert(name)
  // is_sel
  //alert(JSON.stringify(this.state.mainArray))
}

    render() {


      let Arr = this.state.mainArray.map((a, i) => {

           return   <View key = {i}>

               <TouchableOpacity style={{width:wp('92%'),borderRadius:0, marginTop:hp('2.5%'),
                backgroundColor:'#1976D2',height:hp('7%'),alignSelf:'center',}}
                onPress={this._handlePressSignup}>
               <View style={{width:'92%',alignSelf:'center',flexDirection:'row', height:hp('7%'), justifyContent:'space-between',alignItems:'center'}}>
               <Text style = {{color:'white',fontSize: 16,fontFamily:'AvenirLTStd-Heavy',
               alignSelf:'center'}}>
               Medicine {i + 1}
               </Text>
               <Image style={{width:15, height:15, resizeMode:'contain', alignSelf:'center', marginRight:0}} source={require('./down.png')}/>
               </View>
               </TouchableOpacity>

             <View style={{marginLeft: wp(4), flexDirection:'column'}}>
               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
               Drug Name</Text>

               <View style = {{flexDirection:'row',marginTop:hp('0%'),width:wp('92%'),height:hp('7%'), borderColor:'#F0F0F0',borderRadius:5, borderWidth:2,  backgroundColor:'white',}}>
                   <TextInput style = {{width:wp('92%'),color:'black', height:hp('7%'), fontSize:16, fontFamily:'Avenir Roman', paddingLeft:wp(3),}}
                              placeholder = {'Enter Medicine'}
                              placeholderTextColor = "#909090"
                              value = {a.name}
                                                   onChangeText={text => {
                                                       let { mainArray } = this.state;
                                                       mainArray[i].name = text;
                                                       this.setState({
                                                           mainArray,
                                                       });
                                                   }}
                   />
               </View>

               <View style={{flexDirection:'row',justifyContent:'space-between', marginRight:wp(5)}}>

               <View style={{flexDirection:'column',}}>

               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
               Dosage</Text>

               <View style={{flexDirection:'row',}}>
               <TouchableOpacity style={{width:35, height:35, borderRadius:35/2, borderWidth:0, borderColor:'#E2E2E2',marginRight:10}}  onPress={()=>this.minus(i)}>
               <Image style={{width:35, height:35, resizeMode:'contain'}}
               source={require('./minus.png')}/>
               </TouchableOpacity>

               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'center',marginTop:hp('1%') }}>
               {a.dosage} Tablet</Text>

               <TouchableOpacity style={{width:35, height:35, borderRadius:35/2, borderWidth:0, borderColor:'#E2E2E2', marginLeft:10}}
                 onPress={()=>this.add(i)}>
               <Image style={{width:35, height:35, resizeMode:'contain'}}
               source={require('./plus.png')}/>
               </TouchableOpacity>
               </View>

               </View>

               <View style={{flexDirection:'column',}}>
               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
               Duration</Text>

               <View style={{flexDirection:'row',}}>
               <TouchableOpacity style={{width:35, height:35, borderRadius:35/2, borderWidth:0, borderColor:'#E2E2E2',marginRight:10}}   onPress={()=>this.minuss(i)}>
               <Image style={{width:35, height:35, resizeMode:'contain'}}
               source={require('./minus.png')}
                  />
               </TouchableOpacity>

               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'center',marginTop:hp('1%') }}>
               {a.duration } Day </Text>

               <TouchableOpacity style={{width:35, height:35, borderRadius:35/2, borderWidth:0, borderColor:'#E2E2E2', marginLeft:10}} onPress={()=>this.adds(i)}>
               <Image style={{width:35, height:35, resizeMode:'contain'}}
               source={require('./plus.png')}/>
               </TouchableOpacity>
               </View>
               </View>
               </View>

               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
               Repeat</Text>

                 <View style={{marginTop:hp(0),flexDirection:'row'}}>


{a.repeatArr.map((item, j) => {
return <View key = {j} style = {{flexDirection:'row'}}>
  <TouchableOpacity
  onPress={()=> this.onSelect(item, j,i)}>
  {item.is_sel != 1 &&(

    <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
     borderWidth:2, padding:5, backgroundColor: 'white' ,justifyContent:'center',
      marginLeft:wp('1%'), marginRight:wp(1)}}>

    <Text style = {{color:'gray',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
    alignSelf:'center', textAlign:'center' }}>
    {item.name}
    </Text>
    </View>

      )}

  {item.is_sel==1 && (

    <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
     borderWidth:2, padding:5, backgroundColor: '#1976D2' ,justifyContent:'center',
      marginLeft:wp('1%'), marginRight:wp(1)}}>

    <Text style = {{color:'white',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
    alignSelf:'center', textAlign:'center'  }}>
    {item.name}
    </Text>
    </View>

      )}

    </TouchableOpacity>
    </View>
}
)
}


                 </View>


               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
               Time of the Day</Text>

                 <View style={{marginTop:hp(0),flexDirection:'row'}}>


                 {a.timeArr.map((item, j) => {
                 return <View key = {j} style = {{flexDirection:'row'}}>
                   <TouchableOpacity
                   onPress={()=> this.onSelectTime(item, j,i)}>
                   {item.is_sel != 1 &&(

                     <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
                      borderWidth:2, padding:5, backgroundColor: 'white' ,justifyContent:'center',
                       marginLeft:wp('1%'), marginRight:wp(1)}}>

                     <Text style = {{color:'gray',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
                     alignSelf:'center', textAlign:'center' }}>
                     {item.name}
                     </Text>
                     </View>

                       )}

                   {item.is_sel==1 && (

                     <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
                      borderWidth:2, padding:5, backgroundColor: '#1976D2' ,justifyContent:'center',
                       marginLeft:wp('1%'), marginRight:wp(1)}}>

                     <Text style = {{color:'white',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
                     alignSelf:'center', textAlign:'center'  }}>
                     {item.name}
                     </Text>
                     </View>

                       )}

                     </TouchableOpacity>
                     </View>
                 }
                 )
                 }


                 </View>

               <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
               To be Taken</Text>

                 <View style={{marginTop:hp(0),marginBottom:hp(2),flexDirection:'row'}}>
                 {a.tobeArr.map((item, j) => {
                 return <View key = {j} style = {{flexDirection:'row'}}>
                   <TouchableOpacity
                   onPress={()=> this.onSelectTimes(item, j,i)}>
                   {item.is_sel != 1 &&(

                     <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
                      borderWidth:2, padding:5, backgroundColor: 'white' ,justifyContent:'center',
                       marginLeft:wp('1%'), marginRight:wp(1)}}>

                     <Text style = {{color:'gray',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
                     alignSelf:'center', textAlign:'center' }}>
                     {item.name}
                     </Text>
                     </View>

                       )}

                   {item.is_sel==1 && (

                     <View style = {{flexDirection:'row',width:wp('28%'),height:50, borderColor:'#F0F0F0',borderRadius:25,
                      borderWidth:2, padding:5, backgroundColor: '#1976D2' ,justifyContent:'center',
                       marginLeft:wp('1%'), marginRight:wp(1)}}>

                     <Text style = {{color:'white',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',
                     alignSelf:'center', textAlign:'center'  }}>
                     {item.name}
                     </Text>
                     </View>

                       )}

                     </TouchableOpacity>
                     </View>
                 }
                 )
                 }
                 </View>

               </View>



             </View>
         })


        if(this.state.loading){
            return(
                <View/>
            )
        }
        return (

      <View style={styles.container}>

        <KeyboardAwareScrollView>
        <View style={{width:wp('100%'), backgroundColor:'transparent',flexDirection:'column',
        alignSelf:'center',}}>

        <View style={{width:'92%', flexDirection:'row',backgroundColor:'white', height:hp('11%'),elevation:7,alignItems:'center' ,justifyContent:'space-between',alignSelf:'center', borderRadius:12, marginTop:20}}>
        <View style={{flexDirection:'column', width:'53%', marginLeft:15, }}>
        <Text style = {{fontSize:19,fontFamily:'AvenirLTStd-Heavy',color:'#1976d2',}}>
        Kunal Bansal
        </Text>
        <Text style = {{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#757575',marginTop:5}}>
        Male  |  25 yrs
        </Text>
        </View>
        <View style={{flexDirection:'column', width:'40%', marginRight:15}}>
        <Text style = {{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#212121',}}>
        Prescription Id: 12345
        </Text>
        <Text style = {{fontSize:15,fontFamily:'AvenirLTStd-Medium',color:'#212121',marginTop:5}}>
        01/06/2020
        </Text>
        </View>
        </View>

        <View style={{marginLeft: wp(4), flexDirection:'column'}}>
          <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
          Diagnosis</Text>

          <View style = {{flexDirection:'row',marginTop:hp('0%'),width:wp('92%'),height:hp('13%'), borderColor:'#F0F0F0',borderRadius:5, borderWidth:2,  backgroundColor:'white',}}>
              <TextInput style = {{width:wp('92%'),color:'black', height:hp('7%'), fontSize:16, fontFamily:'Avenir Roman', paddingLeft:wp(3),}}
                         placeholder = {'write...'}
                         placeholderTextColor = "#909090"
                         textAlignVertical={'top'}
                         onChangeText={(text) => this.setState({diag:text})}
                         value={this.state.diag}
              />
          </View>

          <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
          General Advice</Text>

          <View style = {{flexDirection:'row',marginTop:hp('0%'),width:wp('92%'),height:hp('13%'), borderColor:'#F0F0F0',borderRadius:5, borderWidth:2,  backgroundColor:'white',}}>
              <TextInput style = {{width:wp('92%'),color:'black', height:hp('7%'), fontSize:16, fontFamily:'Avenir Roman', paddingLeft:wp(3),}}
                         placeholder = {'write...'}
                         placeholderTextColor = "#909090"
                         textAlignVertical={'top'}
                         onChangeText={(text) => this.setState({genAd:text})}
                         value={this.state.genAd}
              />
          </View>


          <Text style = {{color:'black',fontSize: 15,fontFamily:'AvenirLTStd-Heavy',textAlign:'left',marginTop:hp('1%'), lineHeight:35}}>
          General Investigation</Text>

          <View style = {{flexDirection:'row',marginTop:hp('0%'),width:wp('92%'),height:hp('13%'), borderColor:'#F0F0F0',borderRadius:5, borderWidth:2,  backgroundColor:'white',}}>
              <TextInput style = {{width:wp('92%'),color:'black', height:hp('7%'), fontSize:16, fontFamily:'Avenir Roman', paddingLeft:wp(3),}}
                         placeholder = {'write...'}
                         placeholderTextColor = "#909090"
                         textAlignVertical={'top'}
                         onChangeText={(text) => this.setState({genInv:text})}
                         value={this.state.genInv}
              />
          </View>
        </View>

        <View style={{width:wp('100%'), height:hp(4.5), backgroundColor:'#F1F1F1',marginTop:15,justifyContent:'center' }}>
          <Text style={{fontSize:16,fontFamily:'AvenirLTStd-Heavy',color:'#1E1F20',marginLeft:wp(3.5), lineHeight:25}}>Add Medicines</Text>
        </View>
{Arr}
          </View>




          <TouchableOpacity style={{width:wp('42%'),borderRadius:5, marginTop:hp('3%'),
    backgroundColor:'#1976D2',height:hp('7%'),marginLeft:wp('4%')}}
      onPress={()=> this.myselect()}>
   <View style={{width:'70%', height:hp('7%'), justifyContent:'center',alignItems:'center'}}>
   <Text style = {{color:'white',fontSize: 18,fontFamily:'AvenirLTStd-Heavy',
   alignSelf:'center'}}>
   ADD MORE
   </Text>
   </View>
   </TouchableOpacity>

        <TouchableOpacity style={{width:wp('82%'),borderRadius:5, marginTop:hp('3%'),
  backgroundColor:'#1976D2',height:hp('7%'),alignSelf:'center', marginRight:wp('2%')}}
  onPress={()=> this.myselectiom()}>
 <View style={{width:'100%', height:hp('7%'), justifyContent:'center',alignItems:'center'}}>
 <Text style = {{color:'white',fontSize: 18,fontFamily:'AvenirLTStd-Heavy',
 alignSelf:'center'}}>
 Submit
 </Text>
 </View>
 </TouchableOpacity>
        </KeyboardAwareScrollView>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor :'#fafafa',
    },

})
