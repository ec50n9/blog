export interface ChatMember {
  id: number;
  name: string;
  avatar: string;
}

export interface ChatMessage {
  id: number;
  sender: ChatMember["id"];
  content: string;
  timestamp: number;
}
