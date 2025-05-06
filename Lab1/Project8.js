import React from 'react';
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';

// MSSV 2124802020728 - Võ Ngân Khanh

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  title: {
    fontSize: 14,
    color: '#6c757d',
    marginRight: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginLeft: 20,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#e9ecef',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#495057',
    textTransform: 'uppercase',
  },
  statusBar: {
    backgroundColor: '#343a40',
  },
  contentContainer: {
    paddingBottom: 20,
  },
});

const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((acc, item) => {
      const group = item.name.last[0].toUpperCase();
      if (!acc[group]) {
        acc[group] = {
          title: group,
          data: [],
        };
      }
      acc[group].data.push(item);
      return acc;
    }, {});
    return Object.values(groupedData);
  };
  

const  Project8 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#343a40" />
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>{item.name.title}.</Text>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.contentContainer}
        stickySectionHeadersEnabled={true}
      />
    </SafeAreaView>
  );
};

export default Project8;

const PEOPLE = [
  {
    name: {
      title: "Ms",
      first: "Linda",
      last: "Anderson",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Michael",
      last: "Brown",
    },
  },
  {
    name: {
      title: "Mr",
      first: "John",
      last: "Doe",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Sarah",
      last: "Davis",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaij",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maëlle",
      last: "Henry",
    },
  },
  {
    name: {
      title: "Mr",
      first: "William",
      last: "Harris",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Robert", 
      last: "Jackson",
    },
  }
];