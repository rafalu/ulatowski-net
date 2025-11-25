import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/social'
import { describe, expect, it } from 'vitest'

describe('social config', () => {
  it('should export social URLs', () => {
    expect(EMAIL).toBeDefined()
    expect(GITHUB_URL).toBeDefined()
    expect(LINKEDIN_URL).toBeDefined()
  })

  it('should have valid email format', () => {
    expect(EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  it('should have valid URLs', () => {
    expect(GITHUB_URL).toMatch(/^https?:\/\/.+/)
    expect(LINKEDIN_URL).toMatch(/^https?:\/\/.+/)
  })
})