import axios from "axios";
import React from "react";
import Article from './Article'
import { useState, useEffect } from "react";


const List =  () => {
 
const [articles, setArticles] = useState([])
useEffect(() => {
getArticles()
}, [])
const getArticles = async () => {
try {
const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=lszIMKm6mmngIqA7qAxgPX0LCpRiUpXR')
setArticles(response.data.results)
} catch (error) { console.error(error) }
}
return (
<>
<h1 className="titlelist">Lista de noticias</h1>
{articles.map((article, index) => (
<Article key={index} data={article} />
))}
</>
)
}


export default List;
