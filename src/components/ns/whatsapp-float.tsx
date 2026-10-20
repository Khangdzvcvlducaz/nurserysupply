"use client";

import { MessageCircle } from "lucide-react";
import { waGenericQuote } from "@/lib/catalog-data";

const WA_LINK = waGenericQuote();

export function WhatsAppFloat() {
  return (
    <a
      className="ns-wa-float"
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
