import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const { blogPosts, addBlogPost } = useContext(BlogContext)
    return (
        <View>
            <Button title="Add Blog" onPress={ addBlogPost }/>
            <FlatList
                data={blogPosts}
                keyExtractor={ (blogPost) => blogPost.title }
                renderItem={ ({ item }) => {
                    return <Text>{item.title}</Text>
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default IndexScreen;