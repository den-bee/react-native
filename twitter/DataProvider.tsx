import React, { useEffect, useState } from "react";

export interface Profile {
    id: number,
    handle: string,
    name: string,
    bio: string,
    avatar: string,
    banner: string,
}

export interface Tweet {
    id: number,
    handle: string,
    text: string,
    createdOn: Date,
}

export interface DataContext {
    tweets: Tweet[],
    profiles: Profile[],
    loading: boolean,
    loadData: () => void,
}

export const DataContext = React.createContext<DataContext>({tweets: [], profiles: [], loading: false, loadData: () => {}});

export const DataProvider = ({children} : {children: React.ReactNode}) => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const loadData = async () => {
        setLoading(true);
        const tweetData = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
        const profileData = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles");

        const tweetJson = await tweetData.json();
        const profileJson = await profileData.json();

        setTweets(tweetJson);
        setProfiles(profileJson);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <DataContext.Provider value={{tweets: tweets, profiles: profiles, loadData: loadData, loading: loading}}>
            {children}
        </DataContext.Provider>
    )
}