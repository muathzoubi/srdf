'use client'

import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('https://sam-five-snowy.vercel.app/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      setResponse(data.message)
    } catch (error) {
      console.error('Error sending data:', error)
      setResponse('Error sending data')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[350px]">
        <div>
          <div>Send Data</div>
          <div>Send a message to another site</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <input
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button type="submit">Send Data</button>
          </div>
        </form>
        {response && (
          <div>
            <p className="text-sm text-gray-600">Response: {response}</p>
          </div>
        )}
      </div>
    </div>
  )
}

