import React,{useEffect, useState} from 'react';
import privateToken from '../token';
import Profile from "../Components/Profile";

function Home() {
    // state
    const [avatar,setAvatar] = useState(null);
    const [bio,setBio] = useState(null);
    const [username,setUsername] = useState(null);
    const [userUrl,setUserUrl] = useState(null);
    const [followers,setFollowers] = useState(null);
    const [following,setFollowing] = useState(null);
    const [repo,setRepo] = useState([]);
    const [repoCount,setRepoCount] = useState(null);
    const [repoUrl,setRepoUrl] = useState(null);
    const [stars,setStars] = useState([]);
    const [starsCount,setStarsCount] = useState(null);
    const [starsUrl,setStarsUrl] = useState(null);
    const [activity,setActivity] = useState([]);
    const [gists,setGists] = useState([]);
    const [gistsCount,setGistsCount] = useState(null);
    const [gistsUrl,setGistsUrl] = useState(null);

    useEffect(() => { 
        const urls = ["https://api.github.com/users/PanicS7",
        "https://api.github.com/users/PanicS7/repos",
        "https://api.github.com/users/PanicS7/starred",
        "https://api.github.com/users/PanicS7/events",
        "https://api.github.com/users/PanicS7/gists"];
        const headers = {
            "Authorization": `Token ${privateToken}`
        };
        
        const fetchData = async () => {
          try {
            // user info
            const response = await fetch(urls[0], {
                "method" : "GET",
                "headers": headers
            });   
            const json = await response.json();

            // user repo
            const response1 = await fetch(urls[1], {
                "method" : "GET",
                "headers": headers
            });   
            let json1 = await response1.json();
            json1 = json1.slice(0,5);

            // user stars
             const response2 = await fetch(urls[2], {
                "method" : "GET",
                "headers": headers
            });   
            let json2 = await response2.json();
            let starCount = json2.length;
            json2 = json2.slice(0,5);

            // user activity
            const response3 = await fetch(urls[3], {
                "method" : "GET",
                "headers": headers
            });   
            let json3 = await response3.json();
            json3 = json3.slice(0,5);

            // user gists
            const response4 = await fetch(urls[4], {
                "method" : "GET",
                "headers": headers
            });   
            let json4 = await response4.json();
            json4 = json4.slice(0,5);

            // set state
            setAvatar(json.avatar_url);
            setBio(json.bio);
            setUsername(json.login);
            setUserUrl(json.html_url);
            setFollowers(json.followers);
            setFollowing(json.following);
            setRepoCount(json.public_repos);
            setRepoUrl(`https://github.com/${json.login}?tab=repositories`);
            setStarsCount(starCount);
            setStarsUrl(`https://github.com/${json.login}?tab=stars`);
            setGistsUrl(`https://gist.github.com/${json.login}`);
            setGistsCount(json.public_gists);

            
            setRepo([
                json1.map(r => {
                    return {
                        id: r.id,
                        name: r.name,
                        description: r.description,
                        url: r.html_url
                    }
                })
            ]);

            setStars([
                json2.map(r => {
                    return {
                        id: r.id,
                        name: r.name,
                        description: r.description,
                        url: r.html_url
                    }
                })
            ]);

            setActivity([
                json3.map(r => {
                    
                    return {
                        id: r.id,
                        type: r.type,
                        name : r.repo.name    
                    }
                })
            ]);

            setGists([
                json4.map(r => {
                    let keys = Object.keys(r.files);
                    return {
                        id: r.id,
                        url: r.html_url,
                        description: r.description,
                        keys : keys
                    }
                })
            ]);


          } catch (error) {   
            console.log("error", error); 
          }
    
        };
    
        fetchData();  
           
    },[]);

    return (
        <div>
            <Profile
                avatar={avatar} 
                bio={bio} 
                username={username} 
                userUrl={userUrl} 
                followers={followers} 
                following={following}
                repoCount={repoCount}
                repo={repo}
                repoUrl={repoUrl}
                stars={stars}   
                starsCount={starsCount}
                starsUrl={starsUrl}
                activity={activity}   
                gists={gists}
                gistsCount={gistsCount}
                gistsUrl={gistsUrl}
            />
        </div>
    );
}

export default Home;