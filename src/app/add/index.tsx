import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function App(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>
            <Text style={styles.label}>Seleciona a categoria</Text>
            <Categories/>

            <View style={styles.form}>
            <Input placeholder="Nome" />
            <Input placeholder="Url" />
            <Button title="Adicionar"/>
            </View>
        </View>
    )
}