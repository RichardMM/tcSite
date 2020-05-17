import React, { useState, useEffect, Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'

import cntClient from '../stateManagement'
import parseContent from '../utlities'

function BlogSummary({ mainImage: { fields: { file: { url } } }, title, date, tags, content, moreLink }) {

    
    let tagArr = tags.map((el, key) => {
        return <span className="blog-summary-tag bg-brand" key={key}>{el}</span>
    })


    return (

        <div className="grid-col-5 blog-summary-card">
            <div className="blog-image-wrapper">
                <img src={url} alt="blog" className="blog-image" />

            </div>
            <div className="blog-summary">
                <h1>{title}</h1>
                <h4>{date}</h4>
                {parseContent(content.content[0], true)}
                <span>.........</span>
                <span><Link to={`/blog/${moreLink}`}>Read More</Link></span>
                <br />

                {tagArr}

            </div>

        </div>

    )
}


export function BlogSummaryGroup(props) {
    let [blogSummaries, setBlogSummaries] = useState([])
    let [dataIsloaded, setDataIsLoaded] = useState(false)
    useEffect(() => {
        cntClient.getEntries({ content_type: "blog" }).then((response) => {

            let data = response.items.map((el) => {
                return <BlogSummary {...el.fields} key={el.sys.id} moreLink={el.sys.id} />

            })
            setBlogSummaries(data)
            setDataIsLoaded(true)
        })
    }, [dataIsloaded])


    return (

        <div className="blog-summary-group">
            {blogSummaries}
        </div>

    )
}


export function BlogDetail(props) {
    let { id } = useParams()
    let [blogContent, setblogContent] = useState({ title: "Loading...", date: "", content: <span></span> ,mainImage:{fields:{file:{url:""}}}})

    useEffect(() => {
        cntClient.getEntry({ id }).then((response) => {
            let dt = response.fields
            console.log(dt.content)
            let newState = {title:dt.title, date:dt.date, content:parseContent(dt["content"]),mainImage:dt.mainImage}
            
            
            
           
            setblogContent(newState)
        })
    }, [blogContent.title])


    return (
        <Fragment>
            <h1>{blogContent.title}</h1>
            <span>Date: {blogContent.date}</span>
            <img src={blogContent.mainImage.fields.file.url} alt="blog placeholder" />
            {blogContent.content}
        </Fragment>

    )
}