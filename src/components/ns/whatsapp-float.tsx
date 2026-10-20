"use client";

import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/84981848702?text=Hi%20Nursery%20Supply!%20I'd%20like%20a%20quote%20for%20nursery%20%26%20garden%20products.%20Quantity%3A%20___";

export function WhatsAppFloat() {
  return (
    <a
      className="ns-wa-float"
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
