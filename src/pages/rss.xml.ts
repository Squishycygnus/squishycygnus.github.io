import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import data from "../config.json";

export async function get(context: APIContext) {
    const posts = await getCollection("blog");

    return rss({
        title: data.title,
        description: data.description,
        site: context.site!,
        items: posts.map(post => ({
            link: `/${ post.slug }`,
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description
        }))
    });
}
