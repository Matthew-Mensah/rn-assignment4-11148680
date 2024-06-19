// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import JobCard from '../Components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,00', location: 'Accra, Ghana', logo: 'https://via.placeholder.com/50', backgroundColor: '#1877F2' },
    { id: 2, title: 'Product Manager', company: 'Google', salary: '$160,00', location: 'San Francisco, US', logo: 'https://via.placeholder.com/50', backgroundColor: '#DB4437' },
  ];

  const popularJobs = [
    { id: 3, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: 'https://via.placeholder.com/50', backgroundColor: '#F8D210' },
    { id: 4, title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: 'https://via.placeholder.com/50', backgroundColor: '#E01E5A' },
    { id: 5, title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: 'https://via.placeholder.com/50', backgroundColor: '#1877F2' },
    { id: 6, title: 'Software Engineer', company: 'Facebook', salary: '$180,00', location: 'Accra, Ghana', logo: 'https://via.placeholder.com/50', backgroundColor: '#1877F2' },
    { id: 7, title: 'Product Manager', company: 'Google', salary: '$160,00', location: 'San Francisco, US', logo: 'https://via.placeholder.com/50', backgroundColor: '#DB4437' },
    { id: 8, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: 'https://via.placeholder.com/50', backgroundColor: '#F8D210' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image style={styles.profileImage} source={{ uri: 'https://via.placeholder.com/50' }} />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search a job or position"
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {featuredJobs.map((card) => (
          <JobCard key={card.id} title={card.title} company={card.company} salary={card.salary} location={card.location} logo={card.logo} backgroundColor={card.backgroundColor} />
        ))}
      </ScrollView>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      {popularJobs.map((card) => (
        <JobCard key={card.id} title={card.title} company={card.company} salary={card.salary} location={card.location} logo={card.logo} backgroundColor={card.backgroundColor} isPopular />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#1E3A8A',
  },
  horizontalScroll: {
    marginBottom: 16,
  },
});

export default HomeScreen;