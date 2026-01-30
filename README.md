# Stash 📚

A lightweight, personal "read later" and "watch later" list hosted entirely on GitHub Pages. No backend database required—just a simple JSON file.

## 🚀 How it Works
This project uses a static `data.json` file as a database. The site fetches this file and renders your saved links as cards, categorizing them into "Read", "Watch", or "Archive" lists.

## 🔗 Live Site
[Click here to view your Stash](https://glennnoronha.github.io/stash/)

## ➕ How to Add New Links
You don't need to write any code to add new items.

1. Open the `data.json` file in this repository.
2. Click the **Pencil Icon** (Edit).
3. Add a new entry inside the square brackets `[ ]`.
4. **Important:** Make sure to add a comma `,` after the previous closing brace `}`.
5. Use this format:

```json
{
  "title": "Title of the Article or Video",
  "url": "https://example.com/link",
  "category": "read",
  "date": "2023-11-01"
}
```

## 📦 How to Archive Items
To remove an item from your main feed but keep it in your history:

1. Edit data.json.
2. Add the "status": "archived" line to the item.
3. It will move to the Archive tab on your site.

```json
{
  "title": "Finished Article",
  "url": "https://example.com/finished",
  "category": "read",
  "date": "2023-10-27",
  "status": "archived"
}
```

## 🛠️ Built With
* __HTML5__
* __CSS3__
* __Vanilla JavaScript__ 
* __JSON__ (Data Storage)
