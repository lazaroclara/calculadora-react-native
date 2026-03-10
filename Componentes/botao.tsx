import { colors } from "@/uteis/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

const Botao = ({
    title, 
    type,
    wide,
    onPress
    }: {
  title: string;
  type: 'topo' | 'direita' | 'numero';
  wide?: boolean;
  onPress?: () => void;
}) => {
    return (
    <TouchableOpacity
    style={[
    styles.botao,
    {
      backgroundColor:
        type == "topo"
          ? colors.buttonWhite
          : type == "direita"
          ? colors.buttonPurple
          : colors.display,
    },
    wide && styles.botaoGrande,
  ]}
  onPress={onPress}>      
  <Text style={{fontSize: 34, color: colors.text }}>{title}</Text>
    </TouchableOpacity>
    );
};

export default Botao;

const styles = StyleSheet.create({
  botao: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.buttonWhite,
  },

  botaoGrande: {
    width: 170,
  },
});