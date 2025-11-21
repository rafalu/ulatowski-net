import { useCallback, useState } from 'react'

export function useToast() {
  const [message, setMessage] = useState<string | null>(null)

  const show = useCallback((msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(null), 3000)
  }, [])

  const hide = useCallback(() => {
    setMessage(null)
  }, [])

  return { message, show, hide }
}
