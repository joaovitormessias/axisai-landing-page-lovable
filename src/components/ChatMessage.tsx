
import React from 'react';
import { User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChartRenderer } from './ChartRenderer';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  responseId?: string;
}

interface ChatMessageProps {
  message: Message;
  onGraphClick: (message: string, responseId?: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onGraphClick }) => {
  const isUser = message.type === 'user';
  
  const processContent = (content: string) => {
    // Procurar por placeholders de gráficos no formato ![graph_id]
    const graphRegex = /!\[(\d+)\]/g;
    const parts = content.split(graphRegex);
    
    return parts.map((part, index) => {
      // Se o índice for ímpar, é um ID de gráfico
      if (index % 2 === 1) {
        return (
          <ChartRenderer
            key={`chart_${part}`}
            graphId={part}
            onDrillDown={(value) => onGraphClick(value, message.responseId)}
          />
        );
      }
      
      // Caso contrário, é texto markdown
      if (part.trim()) {
        return (
          <ReactMarkdown
            key={`text_${index}`}
            remarkPlugins={[remarkGfm]}
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <pre className="bg-muted p-2 rounded-md overflow-x-auto">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {part}
          </ReactMarkdown>
        );
      }
      
      return null;
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start gap-2 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-primary' : 'bg-muted'
        }`}>
          {isUser ? (
            <User className="h-4 w-4 text-primary-foreground" />
          ) : (
            <Bot className="h-4 w-4 text-foreground" />
          )}
        </div>
        
        <div className={`rounded-lg p-3 ${
          isUser 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted text-foreground'
        }`}>
          <div className="prose prose-sm max-w-none">
            {processContent(message.content)}
          </div>
          
          <div className={`text-xs mt-2 opacity-70 ${
            isUser ? 'text-primary-foreground' : 'text-muted-foreground'
          }`}>
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};
