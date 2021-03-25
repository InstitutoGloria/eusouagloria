import home_en from "./english/home.js";
import home_pt from "./portugues/home.js";
import we_en from "./english/we.js"
import we_pt from "./portugues/we.js"

const Languages = {
    English: {
        home_page: home_en,
        we_page:we_en
    },
    Portugues: {
        home_page: home_pt,
        we_page:we_pt
    },
}

export default Languages;