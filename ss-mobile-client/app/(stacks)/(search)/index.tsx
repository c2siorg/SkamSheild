import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Reports as data } from "@/constants/Reports";

export default function App() {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // todo
    setResults(data);
  };

  const onChangeText = (inputText) => {
    setSearchText(inputText);
    setResults([]);
  };

  const onPressPlusButton = () => {};

  const getStatusColor = (status) => {
    switch (status) {
      case 0:
        return "#ffcccc"; // Malicious - Red-ish
      case 2:
        return "#fff4cc"; // Reported as suspicious - Yellow-ish
      case 3:
        return "#ccffcc"; // Clean - Green-ish
      default:
        return "#ffffff"; // Default - White
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={[styles.item, { backgroundColor: getStatusColor(item.status) }]}
    >
      <Text
        style={styles.title}
      >{`${item.securityVendor} (${item.title})`}</Text>
      <Text
        style={styles.details}
      >{`${item.details} by the security vendor ${item.securityVendor}`}</Text>
      <Text style={styles.date}>Last Reported on {item.lastReported}</Text>
    </Pressable>
  );

  const handleProfile = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/favicon.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Skam Sheild Client</Text>
        <Pressable style={styles.iconButton} onPress={handleProfile}>
          <Ionicons name="person-circle-outline" size={30} color="#0777FD" />
        </Pressable>
      </View>
      <View style={styles.searchBarContainer}>
        <Pressable style={styles.iconButton}>
          <Ionicons name="camera" size={24} color="black" />
        </Pressable>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor={"black"}
          onChangeText={onChangeText}
          value={searchText}
        />
        <Pressable style={styles.iconButton}>
          <Ionicons name="attach" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconButton} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </Pressable>
      </View>
      {results.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      ) : (
        <View style={styles.emptyList}>
          <Text style={styles.emptyListLabel}>
            Nothing suspicious found. Please add your suspicious content (text/
            image/ file) and click search.
          </Text>
        </View>
      )}

      <Pressable style={styles.plusButton}>
        <Link href="/report">
          <Ionicons name="add-circle" size={80} color="#0777FD" />
        </Link>
      </Pressable>

      <Pressable style={styles.chatButton}>
        <Link href="/message">
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={45}
            color="#0777FD"
          />
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 24,
    flexGrow: 1,
    // fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
  },
  searchBar: {
    flex: 1,
    height: 60,
    borderColor: "#ccc",
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  list: {
    flex: 1,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListLabel: {
    fontSize: 18,
    textAlign: "center",
    padding: 10,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 5,
    borderRadius: 7,
  },
  plusButton: {
    position: "absolute",
    bottom: 16,
    left: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    marginTop: 5,
    fontStyle: "italic",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  iconButton: {
    padding: 8,
  },
  chatButton: {
    position: "absolute",
    bottom: 100,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
