import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
    extends: [
        shiki({
            theme: "vitesse-dark"
        })
    ],
    nodes: {
        heading: {
            ...nodes.heading,
            render: component("./src/components/PostHeading.astro")
        }
    },
    tags: {
        youtube: {
            render: component("./src/components/YouTubeEmbed.astro"),
            attributes: {
                url: { type: String }
            }
        }
    }
});