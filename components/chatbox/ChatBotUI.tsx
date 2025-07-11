'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import { Product } from "@/types/product";
import { useState } from "react";
import Text from "./Text";
import { Message } from "@/types/message";
import Content from "./Content";

const ChatBotUI = ({ products }: { products: Product[] }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setInput('');

    setTimeout(() => {
      const userMessage = { from: 'user', text: input } as const;
      console.log('input: ' + input);
      const lowerInput = input.toLowerCase();

      const matchedProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerInput)
      );

      let botReply: string = '';

      if (matchedProducts.length > 0) {
        botReply =
          'Mình tìm thấy các khóa học phù hợp:\n' +
          matchedProducts.map(p => `- ${p.name}: ${p.shortDescription}`).join('\n');
      } else {
        botReply = 'Xin lỗi, mình chưa tìm thấy khóa học phù hợp. Bạn có thể mô tả rõ hơn?';
      }

      const botMessage = { from: 'bot', text: botReply } as const;

      setMessages(prev => [...prev, userMessage, botMessage]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Popover>
      <PopoverTrigger className="fixed bottom-6 right-6 z-50 cursor-pointer">
        <Image
          src='https://www.shutterstock.com/image-vector/3d-vector-robot-chatbot-ai-600nw-2294117979.jpg'
          width={60}
          height={60}
          alt="Chat box logo"
          className="object-cover rounded-full"
        />
      </PopoverTrigger>
      <PopoverContent side="top" align="end" className="w-[350px] p-0 z-50 border-2 border-green-400 shadow-lg rounded-lg">
        <Content messages={messages} isLoading={isLoading} />
        <Text input={input} setInput={setInput} handleSend={handleSend} isLoading={isLoading} />
      </PopoverContent>
    </Popover>
  )
}

export default ChatBotUI