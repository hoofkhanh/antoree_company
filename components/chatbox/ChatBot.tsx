import { fetchApi } from "@/lib/api";
import { Product } from "@/types/product";
import ChatBotUI from "./ChatBotUI";

const ChatBot = async () => {
  const products: Product[] = await fetchApi('products');

  return <ChatBotUI products={products} />
}

export default ChatBot