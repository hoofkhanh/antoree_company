import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button';

type TextProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
  isLoading: boolean
}

const Text = ({ input, setInput, handleSend, isLoading }: TextProps) => {
  return (
    <div className="flex gap-2 p-3 ">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Nhập tin nhắn..."
        disabled={isLoading}
      />
      <Button onClick={handleSend} disabled={isLoading} className='cursor-pointer bg-antoree' >Gửi</Button>
    </div>
  )
}

export default Text