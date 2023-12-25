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
    profile?: Profile
}

export interface DataContext {
    tweets: Tweet[],
    loading: boolean,
    loadData: () => void,
}

export const DataContext = React.createContext<DataContext>({tweets: [], loading: false, loadData: () => {}});

export const DataProvider = ({children} : {children: React.ReactNode}) => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const loadData = async () => {
        setLoading(true);
        const tweetData = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
        const profileData = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles");

        const tweetJson = await tweetData.json();
        const profileJson = await profileData.json();

        let tweetArray = tweetJson.map((tweet : Tweet) => {
            tweet.profile = profileJson?.find((profile : Profile) => (tweet.handle === profile.handle))
            return tweet;
        })

        setTweets(tweetArray);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <DataContext.Provider value={{tweets: tweets, loadData: loadData, loading: loading}}>
            {children}
        </DataContext.Provider>
    )
}