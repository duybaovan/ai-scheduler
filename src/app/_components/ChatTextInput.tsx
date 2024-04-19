import React, { useRef } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

interface ChatTextInputProps {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleInputSubmit: () => void;
  isLoading: boolean;
  placeholder?: string;
  isMobileMode: boolean;
}

const ChatTextInput: React.FC<ChatTextInputProps> = ({
  input,
  handleInputChange,
  handleInputSubmit,
  isLoading,
  placeholder = "Talk to your scheduler...",
}) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className={`w-full rounded-xl bg-white`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleInputSubmit();
        }}
        className="flex items-center space-x-4 rounded-xl"
      >
        <Textarea
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleInputSubmit();
            }
          }}
          className="resize-none"
          ref={inputRef}
          value={input}
          onChange={(e) => {
            handleInputChange(e);
          }}
          disabled={isLoading}
          placeholder={placeholder}
        />
        <Button type="submit" disabled={!input || isLoading}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ChatTextInput;
