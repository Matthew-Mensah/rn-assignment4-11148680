// components/JobCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ title, company, salary, location, logo, backgroundColor, isPopular }) => {
  return (
    <View style={[styles.card, isPopular && styles.popularCard, { backgroundColor }]}>
      <Image style={isPopular ? styles.popularLogo : styles.logo} source={{ uri: logo }} />
      <View style={styles.details}>
        <Text style={[styles.title, isPopular && styles.popularTitle]}>{title}</Text>
        <Text style={[styles.company, isPopular && styles.popularCompany]}>{company}</Text>
        <Text style={[styles.salary, isPopular && styles.popularSalary]}>{salary}</Text>
        <Text style={[styles.location, isPopular && styles.popularLocation]}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    backgroundColor: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  popularLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  popularTitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
  },
  company: {
    fontSize: 16,
    color: '#000',
  },
  popularCompany: {
    fontSize: 13,
    color: '#000',
  },
  salary: {
    fontSize: 16,
    color: '#000',
  },
  popularSalary: {
    fontSize: 13,
    color: '#000',
  },
  location: {
    fontSize: 14,
    color: '#000',
  },
  popularLocation: {
    fontSize: 13,
    color: '#000',
  },
  popularCard: {
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 4,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
});

export default JobCard;