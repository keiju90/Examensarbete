import React, { useState, useEffect } from "react";
import {
  Modal,
  Picker,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
type Props = {
  visible: boolean,
  items: string[],
  title: string,
  onClose: () => void,
  onSelect: (value: string) => void,
  value?: string,
};

const PickerModal: React.FC<Props> = ({
  visible,
  show,
  setShow,
  // items,
  title,
  // onClose,
  Onselect,
  value,
}) => {
  // const [currentIndex, setCurrentIndex] = useState(null);
  // const [onClose, setOnClose] = useState("");
  const [pickerValue, setPickerValue] = useState("Useful");
  const items = [
    "5 minutes or less",
    "Useful",
    "Urgent",
    "Relaxing",
    "Not so important",
  ];

  useEffect(() => {
    if (value) {
      setPickerValue(value);
    }
  }, [value]);

  // onClose;
  // const onClose = (show) => {
  //   setShow = "false";
  // };

  return (
    <Modal animated transparent visible={visible} show={show}>
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <View style={styles.header}>
            <Ionicons
              name="close"
              size={32}
              color="black"
              // onPress={onClose}
              onPress={() => setShow(!true)}
              animationType="fade"
            />
            <Text>{title}</Text>
            <Ionicons name="md-checkmark-circle" size="32"></Ionicons>
          </View>
          <Picker
            selectedValue={pickerValue}
            onValueChange={(value) => setPickerValue(value)}
          >
            {items.map((item) => (
              <Picker.Item value={item} label={item} />
            ))}
          </Picker>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
});

export default PickerModal;
