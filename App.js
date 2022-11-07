import { StyleSheet, View } from 'react-native';
import Navigation from './component/route/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
