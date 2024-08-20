import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initialize with a welcome message
    setMessages([
      {
        _id: 1,
        text: "Hello! How can I help you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Skam Shield Support",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    // Send an automated reply
    const reply = {
      _id: Math.random().toString(36).substring(7), // Generate a unique ID
      text: "AI Assistance will be available for your support in the future.",
      createdAt: new Date(),
      user: {
        _id: 2, // The ID of the bot/user sending the automated reply
        name: "Skam Shield Support",
      },
    };

    setTimeout(() => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [reply])
      );
    }, 500); // Delay the response slightly for a more natural feel
  }, []);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Handle the selected image
      console.log(result.assets[0].uri);
    }
  };

  const handleFilePicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({});

    if (result.type !== "cancel") {
      // Handle the selected file
      console.log(result.uri);
    }
  };

  const renderCustomActions = (props) => {
    return (
      <Actions {...props}>
        <Pressable onPress={handleImagePicker} style={styles.actionButton}>
          <Ionicons name="image-outline" size={28} color="#007BFF" />
        </Pressable>
        <Pressable onPress={handleFilePicker} style={styles.actionButton}>
          <Ionicons name="attach-outline" size={28} color="#007BFF" />
        </Pressable>
      </Actions>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <Link href="/">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
        </Pressable>

        <Text style={styles.title}>AI Assistance</Text>
        <Pressable style={styles.titleIcon}>
          <Ionicons name="nutrition" size={24} color="black" />
        </Pressable>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1, // Your user ID
        }}
        placeholder="Type your message here..."
        alwaysShowSend
        // renderActions={renderCustomActions}
      />
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
  backButton: {
    marginRight: 10,
  },
  titleIcon: {
    marginLeft: 10,
  },
  actionButton: {
    marginHorizontal: 5,
  },
});
