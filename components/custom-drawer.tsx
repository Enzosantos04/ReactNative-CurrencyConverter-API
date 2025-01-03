import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text, View, StyleSheet } from 'react-native';



export const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Enzo Currency Exchange</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 10,
alignItems: 'center',
        justifyContent: 'center',

    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
     color: '#007AFF',

    },
 
});