import React, { useEffect, useState } from 'react'
import MyContext from './MyContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { firedb } from "../../Firebase/FirebaseConfig";
import toast from "react-hot-toast";

function MyState(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }

    //* search state
    const [searchkey, setSearchkey] = useState('');

    //* loading state
    const [loading, setloading] = useState(false);

    //* getAllBlog State 
    const [getAllBlog, setGetAllBlog] = useState([]);

    //* getAllBlogs Function
    function getAllBlogs() {
        setloading(true);
        try {
            const q = query(
                collection(firedb, "blogPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllBlog(blogArray)
                console.log(blogArray)
                setloading(false)
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, []);

    // Blog Delete Function 
    const deleteBlogs = async (id) => {
        try {
            if(confirm("Are you sure to delete this post?") ){

                await deleteDoc(doc(firedb, "blogPost", id))
                getAllBlogs()
                toast.success("Blogs deleted successfully")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MyContext.Provider value={{
            mode,
            toggleMode,
            searchkey,
            setSearchkey,
            loading,
            setloading,
            getAllBlog,
            deleteBlogs
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState