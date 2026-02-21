import { useState, useEffect } from 'react'
import { sanityClient } from '../lib/sanityClient'
import type { UseSanityResult } from '../types'

export function useSanity<T>(query: string, params?: Record<string, unknown>): UseSanityResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await sanityClient.fetch<T>(query, params ?? {})
        if (!cancelled) {
          setData(result)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to fetch data')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      cancelled = true
    }
  }, [query])

  return { data, loading, error }
}
