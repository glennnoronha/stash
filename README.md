# stash

A lightweight, personal "read later" and "watch later" list hosted entirely on GitHub Pages. No backend database required—just a simple JSON file.

## 🚀 How it Works
This project uses a static `data.json` file as a database. The site fetches this file and renders your saved links as cards, categorizing them into "Read" or "Watch" lists.

## 🔗 Live Site
[Click here to view your Save Stack](https://glennnoronha.github.io/stash/)

## ➕ How to Add New Links
You don't need to write any code to add new items.

1. Open the `data.json` file in this repository.
2. Click the **Pencil Icon** (Edit).
3. Add a new entry inside the square brackets `[ ]`, making sure to add a comma `,` after the previous item.
4. Use this format:

```json
{
  "title": "Title of the Article or Video",
  "url": "[https://example.com/link](https://example.com/link)",
  "category": "read",
  "date": "2023-11-01"
}
