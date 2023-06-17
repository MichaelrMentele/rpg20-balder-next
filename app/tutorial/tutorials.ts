import path from "path"
import fs from "fs/promises"
import * as posts from './content'

export function getTutorials() {
  const posts = await fs.readdir(path.join(process.cwd(), "content"))

  return Promise.all(
    posts 
    .filter((file) => path.extname(file) === '.mdx')
    .map(async (file) => {
      const filePath = `./posts/${file}`
      const postContent = await fs.readFile(filePath, 'utf8')
      const { meta, content } = postContent

      if (data.published === false) {
        return null
      }

      return { ...data, body: content } as Post
    })
}
