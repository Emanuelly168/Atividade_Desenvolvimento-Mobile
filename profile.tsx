import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function FormScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Texto" placeholderTextColor="#000" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="546" keyboardType="numeric" placeholderTextColor="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop: 60 },
  title: { fontSize: 24, marginBottom: 30 },
  inputContainer: {
    backgroundColor: '#ddd',
    marginBottom: 20,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
    width: '80%', 
  },
  input: { fontSize: 18 },
});
