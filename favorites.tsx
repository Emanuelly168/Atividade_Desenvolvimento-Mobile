import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ListScreen() {
  const cards = ["Card 1", "Card 3", "Card 3"];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Entypo name="triangle" size={40} color="#ccc" />
        <Text style={styles.headerText}>Ícones</Text>
      </View>

      {cards.map((title, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>{title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30, marginTop: 40 },
  headerText: { fontSize: 24, marginLeft: 15 },
  card: {
    backgroundColor: '#ddd',
    padding: 25,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  cardText: { fontSize: 18 },
});
