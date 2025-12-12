import fs from 'fs'
import { MetadataRoute } from 'next'
import path from 'path'

export default function robots(): MetadataRoute.Robots {
  // Read the static robots.txt file
  const robotsTxtPath = path.join(process.cwd(), 'public', 'robots.txt')
  const robotsContent = fs.readFileSync(robotsTxtPath, 'utf-8')
  
  // Parse the content to extract rules
  const lines = robotsContent.split('\n')
  const rules: MetadataRoute.Robots['rules'] = []
  let currentUserAgent = '*'
  let currentRule: { userAgent: string | string[], allow?: string[], disallow?: string[] } = {
    userAgent: '*'
  }
  
  for (const line of lines) {
    const trimmed = line.trim()
    
    // Skip comments and empty lines
    if (!trimmed || trimmed.startsWith('#')) continue
    
    if (trimmed.toLowerCase().startsWith('user-agent:')) {
      // Save previous rule if it exists
      if (currentRule.allow || currentRule.disallow) {
        rules.push(currentRule)
      }
      
      // Start new rule
      currentUserAgent = trimmed.substring(trimmed.indexOf(':') + 1).trim()
      currentRule = { userAgent: currentUserAgent }
    } else if (trimmed.toLowerCase().startsWith('allow:')) {
      const path = trimmed.substring(trimmed.indexOf(':') + 1).trim()
      if (path) {
        currentRule.allow = currentRule.allow || []
        currentRule.allow.push(path)
      }
    } else if (trimmed.toLowerCase().startsWith('disallow:')) {
      const path = trimmed.substring(trimmed.indexOf(':') + 1).trim()
      if (path) {
        currentRule.disallow = currentRule.disallow || []
        currentRule.disallow.push(path)
      }
    }
  }
  
  // Add the last rule
  if (currentRule.allow || currentRule.disallow) {
    rules.push(currentRule)
  }
  
  // Extract sitemap URL
  const sitemapLine = lines.find(line => line.trim().toLowerCase().startsWith('sitemap:'))
  const sitemap = sitemapLine 
    ? sitemapLine.substring(sitemapLine.indexOf(':') + 1).trim()
    : 'https://ulatowski.net/sitemap.xml'
  
  return {
    rules,
    sitemap,
  }
}
