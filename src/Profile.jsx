import React, { useEffect, useState } from "react";
import { myData } from "./api/main";
import { Link } from "react-router-dom";


function Profile () {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        async function fetchData() {
            try {
                const data = await myData();
                setUserData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('error fetching user data', error);
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h2>User Profile</h2>
            {userData ? (
                <>
                <img src={userData.profilePicture} alt="Profile" />
                <p>{userData.name}</p>
                <p></p>
                </>
            ) : (
                <p>No user data available.</p>   
            )}
        </div>
    );
}
export default Profile;