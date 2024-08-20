import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function SubmitReportForm() {
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [otherCategory, setOtherCategory] = useState("");
  const [otherSource, setOtherSource] = useState("");
  const [reportText, setReportText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <Link href="/">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
        </Pressable>
        <Text style={styles.title}>Submit Report</Text>
      </View>

      <View>
        <Text style={styles.dropdownLabel}>Content</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type details"
            placeholderTextColor="black"
            value={reportText}
            onChangeText={setReportText}
          />
          <Pressable style={styles.iconButton}>
            <Ionicons name="image" size={24} color="black" />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Ionicons name="attach" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Category</Text>
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          items={[
            { label: "URL", value: "url" },
            { label: "SMS", value: "sms" },
            { label: "Email", value: "email" },
            { label: "Call", value: "call" },
            { label: "Other", value: "other" },
          ]}
          placeholder={{ label: "Select category", value: "" }}
          style={pickerSelectStyles}
        />
      </View>

      {category === "other" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type other category"
            placeholderTextColor={"black"}
            value={otherCategory}
            onChangeText={setOtherCategory}
          />
        </View>
      )}

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Source</Text>
        <RNPickerSelect
          onValueChange={(value) => setSource(value)}
          items={[
            { label: "GMAIL", value: "gmail" },
            { label: "Twitter", value: "twitter" },
            { label: "Tiktok", value: "tiktok" },
            { label: "Telegram", value: "telegram" },
            { label: "Other", value: "other" },
          ]}
          placeholder={{ label: "Select source", value: "" }}
          style={pickerSelectStyles}
        />
      </View>

      {source === "other" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type other source"
            placeholderTextColor={"black"}
            value={otherSource}
            onChangeText={setOtherSource}
          />
        </View>
      )}

      <Pressable style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  iconButton: {
    padding: 8,
  },
  dropdownContainer: {
    marginBottom: 16,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  submitButton: {
    marginTop: 32,
    backgroundColor: "#0777FD",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    marginRight: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#f0f0f0",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#f0f0f0",
  },
});
