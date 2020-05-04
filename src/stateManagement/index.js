import {createClient} from 'contentful'

 let cntClient = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "z54i2koapku9",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "KKJkU4oF7feJRWyLZ97qVXeRJ6QnlvjS5HwBaghnBpQ"
  })


  export default cntClient