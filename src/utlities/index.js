import React from 'react'

export default function parseContent(data, limitText = false) {


    if (data.content !== undefined) {
        return data.content.map((el, idx) => {
            switch (el.nodeType) {
                case 'paragraph':
                    return <p key={idx} >{parseContent(el)}</p>

                case 'unordered-list':
                    return <ul key={idx}  >{parseContent(el)}</ul>
                case 'ordered-list':
                    return <ol key={idx}  >{parseContent(el)}</ol>
                case "list-item":
                    return <li key={idx}  >{parseContent(el)}</li>
                case "heading-1":
                    return <h1 key={idx}  >{parseContent(el)}</h1>
                case "heading-2":
                    return <h2 key={idx}  >{parseContent(el)}</h2>
                case "heading-3":
                    return <h3 key={idx}  >{parseContent(el)}</h3>
                case "heading-4":
                    return <h4 key={idx}  >{parseContent(el)}</h4>
                case "heading-5":
                    return <h5 key={idx}  >{parseContent(el)}</h5>
                case "heading-6":
                    return <h6 key={idx}  >{parseContent(el)}</h6>
                case "blockquote":
                    return <blockquote key={idx}  >{parseContent(el)}</blockquote>
                case "hr":
                    return <hr key={idx} ></hr>
                case "hyperlink":
                    return <a key={idx} href={el.data.uri} >{parseContent(el)}</a>
                case "embedded-asset-block":
                    return <img src={el.data.target.fields.file.url} alt="missing " />

                case "text":

                    let textStyle = el.marks.map((style)=>{
                        return `contentful-${style.type}` 
                    })

                    let toDisplay;
                    if (limitText) {
                        toDisplay =  el.value.substring(0, 371)
                    } else {
                        toDisplay =  el.value
                    }

                    if(el.value!=="\n"){
                        return <span key={idx} className={textStyle.join(" ")} >{toDisplay}</span>
                
                    }else{
                        return <br/>
                    }
                    

                default:
                    return alert(el.nodeType + " was not found")
            }

        })

    } else {

        return <span>{data.value}</span>



    }

}




