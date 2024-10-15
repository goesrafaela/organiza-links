import { FlatList } from "react-native";
import { styles } from "./styles";

//importações criadas
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";


export function Categories() {
    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Category 
            name={item.name} 
            icon={item.icon} 
            isSelected={false} />
            )}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            //remove a barra de rolagem👇👇
            showsHorizontalScrollIndicator={false}
        />
    )
}