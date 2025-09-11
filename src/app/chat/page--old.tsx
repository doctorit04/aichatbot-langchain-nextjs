'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import React, { useState } from 'react'


function Chat() {

    //use chat
    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({ api: '/api/chat_04_stream' }),
    })

    const [input, setInput] = useState("")

    console.log("Input:", input)

  return (
    <div className='p-4 bg-amber-600'>
        { /* แสดงข้อความแชตทั้งหมด */ }
        <form onSubmit={e => {
            e.preventDefault()
            sendMessage({text: input})
            setInput("")
        }}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Send</button>
        </form>

        { /* แสดงข้อความแชตทั้งหมด */ }
        {status === "submitted" || status === "streaming" && (
            <div> AI กำลังคิด ..... </div>
        )}

        {/* แสดงข้อความแชตทั้งหมด */ }
        <div className='mt-4 space-y-4'>
            {messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'}`}>
                    <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.parts.map(part => part.text).join('')}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Chat
