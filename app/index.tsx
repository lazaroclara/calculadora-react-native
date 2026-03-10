import { Text, View } from "react-native";
import {Stack} from 'expo-router'
import Calculadora from "@/Componentes/Calculadora";

export default function Index() {
  return (
   <>
   <Stack.Screen options={{title: 'Calculadora'}} />
   <Calculadora/>
   </>
  );
}
