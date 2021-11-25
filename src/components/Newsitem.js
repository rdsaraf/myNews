import React from 'react'

const Newsitem = (props) => {
    let { title, description, imgUrl, newsUrl } = props;
    return (
        <div>
            <div className={`card card-rounded-lg my-2 bg-${props.mode === 'light' ? 'light' : 'dark'}`} style={{ border: props.mode === 'light' ? '1px solid black' : '1px solid cyan', boxShadow: props.mode === 'light' ? '2px 2px 5px black' : '2px 2px 5px cyan' }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} btn-sm`}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitem
