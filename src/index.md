How to get started:

1. Fill out your details in `config.json`.
    - The title is the title of your blog.
    - The description is a short description of it.
    - The links are the ones you see above, they will automatically add or remove depending on how many you have. Each link should have a `name` and a `link`, and should be in the format:
        ```json
        {
            "name": "Your link's name here. This is what it will be displayed as",
            "link": "The URL for your link"
        }
        ```

2. Add a `favicon.ico` file to the `public/` directory. It should be directly inside, not inside a folder inside `public/`. You can use [Real Favicon Generator](https://realfavicongenerator.net) to generate your `favicon.ico` file.

3. Customise this page (`src/index.md`) to look like whatever you want. You can use the Markdown you've learned to add whatever text you want.

4. Add your posts to `src/content/blog/`. You can use Markdoc for that. I've left a very basic Markdoc guide in there, but you should probably delete that once you're comfortable with Markdoc.

5. Push your blog to the repository, and you're good to go!
