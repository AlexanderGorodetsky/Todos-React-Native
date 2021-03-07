import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from "./TabBarItem"

const TabBar = ({ setType, type }) => {
    return(
        <View style={styles.container}>
            <TabBarItem
                title='All'
                type={type}
                setType={() => setType('All')}
            />
            <TabBarItem
                type={type}
                border title='Active'
                setType={() => setType('Active')}
            />
            <TabBarItem
                type={type}
                bordr title='Complete'
                setType={() => setType('Complete')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})

export default TabBar