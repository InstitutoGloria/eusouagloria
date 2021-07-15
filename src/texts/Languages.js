import home_en from "./english/home.js";
import home_pt from "./portugues/home.js";

import we_en from "./english/we.js"
import we_pt from "./portugues/we.js"

import news_en from './english/news.js'
import news_pt from './portugues/news.js'

const Languages = {
    English: {
        home_page: home_en,
        we_page: we_en,
        news_page: news_en,
    },
    Portugues: {
        home_page: home_pt,
        we_page: we_pt,
        news_page: news_pt,
    },
}

export default Languages;