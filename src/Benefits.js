import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import firebase from 'react-native-firebase';

export default class Benefits extends React.Component {
  constructor() {
    super();
    this.state = {
      gradientColors:['#4c669f', '#3b5998', '#192f6a']
    };
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }
moveToNextView =() =>{
 this.props.navigation.navigate('Step1')
}
  render() {
    return (
      <LinearGradient colors={this.state.gradientColors} style={{flex:1}}>

      <ScrollView >
        <View style={styles.container}>
          <Image source={require('../assets/Images/cartoon_tree.jpeg')} style={[styles.logo]} />
          <Text style={styles.welcome}>
            Benefits Of Tree
          </Text>
          <Text style={styles.instructions}>
            नीम सदियों से गुणों की खान माना जाता है। नीम का प्रयोग संख्य कार्यों के लिए होता है। बैक्टीरिया नाशक, कीटाणुनाशक और अन्य कई गुणों से भरपूर नीम का प्रयोग स्वास्थ्य संबंधी समस्याओं, त्वचा रोगों, ऊर्वरक के तौर पर और दांत से संबंधित बीमारियों से इलाज के लिए किया जाता है।
          </Text>
          <Text style={styles.instructions}>
            नीम सदियों से गुणों की खान माना जाता है। नीम का प्रयोग संख्य कार्यों के लिए होता है। बैक्टीरिया नाशक, कीटाणुनाशक और अन्य कई गुणों से भरपूर नीम का प्रयोग स्वास्थ्य संबंधी समस्याओं, त्वचा रोगों, ऊर्वरक के तौर पर और दांत से संबंधित बीमारियों से इलाज के लिए किया जाता है।
          </Text>

          <Text style={styles.instructions}>
            नीम सदियों से गुणों की खान माना जाता है। नीम का प्रयोग संख्य कार्यों के लिए होता है। बैक्टीरिया नाशक, कीटाणुनाशक और अन्य कई गुणों से भरपूर नीम का प्रयोग स्वास्थ्य संबंधी समस्याओं, त्वचा रोगों, ऊर्वरक के तौर पर और दांत से संबंधित बीमारियों से इलाज के लिए किया जाता है।
          </Text>
          <Text style={styles.instructions}>
            नीम सदियों से गुणों की खान माना जाता है। नीम का प्रयोग संख्य कार्यों के लिए होता है। बैक्टीरिया नाशक, कीटाणुनाशक और अन्य कई गुणों से भरपूर नीम का प्रयोग स्वास्थ्य संबंधी समस्याओं, त्वचा रोगों, ऊर्वरक के तौर पर और दांत से संबंधित बीमारियों से इलाज के लिए किया जाता है।
          </Text>
          <Text style={styles.instructions}>
            नीम सदियों से गुणों की खान माना जाता है। नीम का प्रयोग संख्य कार्यों के लिए होता है। बैक्टीरिया नाशक, कीटाणुनाशक और अन्य कई गुणों से भरपूर नीम का प्रयोग स्वास्थ्य संबंधी समस्याओं, त्वचा रोगों, ऊर्वरक के तौर पर और दांत से संबंधित बीमारियों से इलाज के लिए किया जाता है।
          </Text>

          <Button
            onPress={()=>this.moveToNextView()}
            title="Move Next"
            color="white"
            style={{backgroundColor:'white'}}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
 
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
