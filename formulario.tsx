import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Formulario() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forms</Text>
      
      {}
      <View style={styles.inputBox}>
        <TextInput 
          style={styles.input} 
          placeholder="Texto" 
          placeholderTextColor="#444"
        />
      </View>

      {}
      <View style={styles.inputBox}>
        <TextInput 
          style={styles.input} 
          placeholder="546" 
          keyboardType="numeric" 
          placeholderTextColor="#444"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff', 
    paddingTop: 60 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 30,
    fontWeight: 'bold'
  },
  inputBox: { 
    backgroundColor: '#ddd', 
    marginBottom: 20, 
    height: 50, 
    justifyContent: 'center', 
    paddingHorizontal: 15, 
    width: '80%'
  },
  input: { 
    fontSize: 18 
  },
});
