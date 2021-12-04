import React from 'react';
import { v4 as uuid_v4 } from "uuid"; // generate id / used for keys on map

function Profile(props) {
    // props
    const avatar = props.avatar;
    const bio = props.bio !== "" ? props.bio : "User didnt set his bio";
    const username = props.username;
    const userUrl = props.userUrl;
    const followers = props.followers;
    const following = props.following;
    const repo = props.repo[0] !== undefined ? props.repo[0]: [];
    const repoCount = props.repoCount;
    const repoUrl = props.repoUrl;
    const stars = props.stars[0] !== undefined ? props.stars[0]: [];
    const starsCount = props.starsCount;
    const starsUrl = props.starsUrl;
    const activity = props.activity[0] !== undefined ? props.activity[0]: [];
    const gists = props.gists[0] !== undefined ? props.gists[0]: [];
    const gistsCount = props.gistsCount;
    const gistsUrl = props.gistsUrl;

    return (
        <div>
            {username === null ? null : username !== undefined ?
            <div className="profile-container">
                <header>
                    <div className="img-container">
                        <img alt="user-avatar" src={avatar}></img>
                    </div>
                    <div className="user-info">
                        <h2><a href={userUrl} target="_blank" rel="noreferrer">{username}</a></h2>
                        <br/>
                        <div className="follow">
                            <p>Followers: {followers}</p>
                            <p>Following: {following}</p>
                        </div>
                        <p>Stars: {starsCount + 1}</p>
                        <br/>
                        <pre>{bio}</pre>
                    </div>
                </header>
                <section className="repo">
                    <h2><a href={repoUrl} target="_blank" rel="noreferrer">Repositories</a> <span className="count">{repoCount}</span></h2>
                    <div className="repo-info">
                        {repo.map(r => {
                            return (
                                <div key={r.id}>
                                    <h3><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></h3>
                                    <p>{r.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>      
                <section className="stars">
                    <h2><a href={starsUrl} target="_blank" rel="noreferrer">Starred Repositories</a> <span className="count">{starsCount}</span></h2>
                    <div className="stars-info">
                        {stars.map(r => {
                            return (
                                <div key={r.id}>
                                    <h3><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></h3>
                                    <p>{r.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>     
                <section className="activity">
                    <h2>Activity</h2>
                    <div className="activity-info">
                        {activity.map(r => {
                            return (
                                <div key={r.id}>
                                    <h3>{r.type}</h3>
                                    <p>{r.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>       
                <section className="gists">
                    <h2><a href={gistsUrl} target="_blank" rel="noreferrer">Gists</a> <span className="count">{gistsCount}</span></h2>
                    <div className="gists-info">
                        {gists.map(r => {
                            return (
                                <div className="gist" key={r.id}>
                                    <p><a href={r.url} target="_blank" rel="noreferrer">Check gist</a></p>
                                    <p>{r.description}</p>
                                    <div className="gist-files">
                                        {r.keys.map(k => {
                                            return (
                                                <p key={uuid_v4()}>{k}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div> 
            : <p className="not-found">User not found!</p>}
        </div>
    );
}

export default Profile;