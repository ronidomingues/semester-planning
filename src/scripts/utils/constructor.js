export default class BasePageConstructor {
    constructor() { 
        this.#setDocumentLanguage();
        this.#setHeadProperties();
        this.#setStylesheetPage();
        this.#getInfos();
    }
    #setDocumentLanguage(language = "pt-BR") {
        this.document = document.getElementsByTagName("html")[0];
        this.document.lang = language;
    }
    #setHeadProperties() {
        this.head = document.getElementsByTagName("head")[0];

        const metaCharset = document.createElement("meta");
        metaCharset.setAttribute("charset", "UTF-8");
        this.head.appendChild(metaCharset);

        const metaViewport = document.createElement("meta");
        metaViewport.setAttribute("viewport", "width=device-width, initial-scale=1.0");
        this.head.appendChild(metaViewport);

        const metaRobots = document.createElement("meta");
        metaRobots.setAttribute("name", "robots");
        metaRobots.setAttribute("content", "noindex, nofollow");
        this.head.appendChild(metaRobots);

        const metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        metaDescription.setAttribute("content", "Descrição da página");
        this.head.appendChild(metaDescription);

        const metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        metaKeywords.setAttribute("content", "Palavras-chave da página");
        this.head.appendChild(metaKeywords);

        const metaAuthor = document.createElement("meta");
        metaAuthor.setAttribute("name", "author");
        metaAuthor.setAttribute("content", "Ronivaldo D. Andrade");
        this.head.appendChild(metaAuthor);

        const metaCopyright = document.createElement("meta");
        metaCopyright.setAttribute("name", "copyright");
        metaCopyright.setAttribute("content", "Andradada's Dev © 2026");
        this.head.appendChild(metaCopyright);
    }
    setTitlePage(title) {
        const titleElement = document.createElement("title");
        titleElement.textContent = title;
        this.head.appendChild(titleElement);
    }
    setFaviconPage(faviconPath, faviconType = "image/x-icon") {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "icon");
        linkElement.setAttribute("type", faviconType);
        linkElement.setAttribute("href", faviconPath);
        this.head.appendChild(linkElement);
    }
    #setStylesheetPage(stylesheetPath = "./src/styles/main.css") {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", stylesheetPath);
        this.head.appendChild(linkElement);
    }
    #getInfos() {
        console.log(this.document);
    }
}