import React from 'react';

function Repo(props) {
    // props
    const repoData = props.repoData[0] !== undefined ? props.repoData[0] : [];
    const searchUrl = props.searchUrl;
    const searchValue = props.searchValue;

    return (
        <div>
            {repoData !== [] ?
            <div className="repo-container">
            <p className="repo-search">Searching for: <a href={searchUrl} target="_blank" rel="noreferrer">{searchValue}</a></p>
            {repoData.map(r => {
                return (
                    <div className="repo-section" key={r.id}>
                        <h3><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></h3>
                        <p>{r.description}</p>
                        <p>{r.language}</p>
                    </div>
                )
            })}
            </div> : null}
        </div> 
    );
}

export default Repo;