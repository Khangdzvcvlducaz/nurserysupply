"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      className="ns-wa-float"
      href="https://wa.me/66815552143?text=Hello%20Nursery%20Supply%20%E2%80%94%20wholesale%20inquiry"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
