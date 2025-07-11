import React, { useEffect, useRef } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Message } from '@/types/message'

type ContentProps = {
  messages: Message[];
  isLoading: boolean;
}

const Content = ({ messages, isLoading }: ContentProps) => {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <ScrollArea className="h-[400px] w-[350px] rounded-md border p-4">
      <div className="flex flex-col space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${msg.from === 'user'
              ? 'self-end bg-antoree text-white'
              : 'self-start bg-gray-200 text-gray-800'
              } px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-wrap`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="self-start bg-gray-200 text-gray-800 px-3 py-2 rounded-lg max-w-[80%] animate-pulse">
            Đang gửi...
          </div>
        )}
        <div ref={endRef} />
      </div>
    </ScrollArea>
  )
}

export default Content