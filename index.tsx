import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Representação do ícone do gato do template */}
      <Ionicons name="happy-outline" size={100} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});