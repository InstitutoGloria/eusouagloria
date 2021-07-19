import home_en from "./english/home.js";
import home_pt from "./portugues/home.js";

import we_en from "./english/we.js"
import we_pt from "./portugues/we.js"

import news_en from './english/news.js'
import news_pt from './portugues/news.js'

import projects_en from './english/projects.js'
import projects_pt from './portugues/projects.js'

const Languages = {
    English: {
        home_page: home_en,
        we_page: we_en,
        news_page: news_en,
        projects_page: projects_en,
    },
    Portugues: {
        home_page: home_pt,
        we_page: we_pt,
        news_page: news_pt,
        projects_page: projects_pt,
    },
}

export default Languages;