import { IFeatured, IArticle } from "@Redux/app/type";

export const filterFeatured = (featured: Array<IFeatured>, limit: number = -1) => {
    featured.sort((a, b) => {
        if (a.topFeatured && !b.topFeatured) return 1;
        if (!a.topFeatured && b.topFeatured) return -1;
        return parseInt(a.price) - parseInt(b.price);
    })

    if (limit > 0) return featured.slice(0, limit);
    return featured;
}

export const filterArticles = (articles: Array<IArticle>, limit: number = -1) => {
    articles.sort((a, b) => {
        return Date.parse(a.created) - Date.parse(b.created);
    })

    if (limit > 0) return articles.slice(0, limit);
    return articles;
}