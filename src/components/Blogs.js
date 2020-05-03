import React from 'react'



function BlogSummary(props){


    return(

        <div className="grid-col-5 blog-summary-card">
            <div className="blog-image-wrapper">
            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt="blog" className="blog-image"/>
            
            </div>
           <div className="blog-summary">
                <h1>Blog Title</h1>
                <h4>2020-03-01</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, 
                mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, 
                tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. 
                Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, ......
                <span><a href="/blog/1">Read More</a></span>
                </p>
                <span className="blog-summary-tag bg-brand">technology</span>
                <span className="blog-summary-tag bg-brand">rtk</span>
                <span className="blog-summary-tag bg-brand">Data</span>

            </div>

        </div>

    )
}


export function BlogSummaryGroup(props){


    return(

        <div className="blog-summary-group">
            <BlogSummary/>
            <BlogSummary/>
            <BlogSummary/>
            <BlogSummary/>
            <BlogSummary/>
        </div>

    )
}


export function BlogDetail(props){


    return(

        <h1>Title</h1>

    )
}