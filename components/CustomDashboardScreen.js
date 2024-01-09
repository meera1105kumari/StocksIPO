import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setErrorMessage } from '../redux/authActions';

const CustomDashboardScreen = ({ navigation }) => {
  const dispatchAction = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [upcomingIPOs, setUpcomingIPOs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpcomingIPOs();
  }, []);

  const fetchUpcomingIPOs = async () => {
    try {
      const response = await axios.get(
        'https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_5562085d394e46508083d0b87f51c3d8'
      );

      setUpcomingIPOs(response.data);
    } catch (error) {
      dispatchAction(setErrorMessage('Error fetching IPO data.'));
    } finally {
      setLoading(false);
    }
  };

  const handleIPOPress = (symbol) => {
    
    navigation.navigate('IPODetail', { symbol });
  };

  const renderIPOCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleIPOPress(item.symbol)}>
      <Text style={styles.ipoName}>{item.companyName} {item.symbol}</Text>
      <Text style={styles.managerInfo}>{`Fund Managers: ${item.managers}`}</Text>
      <Text style={styles.ipoInfo}>{`Shares Available: ${item.shares}`}</Text>
      <Text style={styles.ipoInfo}>{`Volume: ${item.volume}`}</Text>
      <Text style={styles.ipoInfo}>{`Highest Price Range: $ ${item.priceRangeHigh}`}</Text>
      <Text style={styles.ipoInfo}>{`Lowest Price Range: $ ${item.priceRangeLow}`}</Text>
      <Text style={styles.dateInfo}>{`Issued Date: ${item.filedDate}`}</Text>
      <Text style={styles.dateInfo}>{`Offering Date: ${item.offeringDate}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <FlatList
          data={upcomingIPOs}
          keyExtractor={(item) => item.symbol}
          renderItem={renderIPOCard}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  ipoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  managerInfo: {
    fontSize: 16,
    marginTop: 8,
  },
  ipoInfo: {
    fontSize: 16,
    marginTop: 4,
  },
  dateInfo: {
    fontSize: 16,
    color: 'green',
    marginTop: 4,
  },
});

export default CustomDashboardScreen;
