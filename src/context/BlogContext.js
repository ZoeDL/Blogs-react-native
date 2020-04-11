import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const blogPosts = [
        { title: 'My first Blog' },
        { title: 'Welcome to the wizard world!'}
    ]
    return (
        <BlogContext.Provider value={ blogPosts }>
            { children }
        </BlogContext.Provider>
    )
}

export default BlogContext;