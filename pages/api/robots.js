export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write("User-agent: *\n")
  res.write("Allow: /\n")
  res.write("\n")
  res.write("Sitemap: https://www.luanchicalestudio.com/sitemap.xml")
  res.end()
}
