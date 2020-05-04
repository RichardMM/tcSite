import React from 'react'

export default function parseContent(data) {


    if (data.content !== undefined) {
        return data.content.map((el,idx)=> {
            switch (el.nodeType) {
                case 'paragraph':
                    return <p key={idx} >{parseContent(el)}</p>

                case 'unordered-list':
                    return <ul key={idx}  >{parseContent(el)}</ul>
                case "list-item":
                    return <li key={idx}  >{parseContent(el)}</li>
                case "text":
                        return <span key={idx} >{el.value}</span>
                default:
                    return alert(el.nodeType + " was not found")
            }
            
        })

    } else {

        return <span>{data.value}</span>



    }

}



   
