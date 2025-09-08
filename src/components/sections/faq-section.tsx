"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "What are you known for?",
    answer: (
      <>
        We are known for{" "}
        <a href="https://sharkfishchicken.com/tags/tilapia" className="text-primary hover:underline">Tilapia</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/catfish-nuggets" className="text-primary hover:underline">Catfish Nuggets</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/fish" className="text-primary hover:underline">Fish</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/salmon" className="text-primary hover:underline">Salmon</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/seafood" className="text-primary hover:underline">Seafood</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/wings" className="text-primary hover:underline">Wings</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/catfish" className="text-primary hover:underline">Catfish</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/chicken-wings" className="text-primary hover:underline">Chicken Wings</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/chicken" className="text-primary hover:underline">Chicken</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/chicken-tenders" className="text-primary hover:underline">Chicken Tenders</a>,{" "}
        <a href="https://sharkfishchicken.com/tags/chicken-sandwich" className="text-primary hover:underline">Chicken Sandwich</a>, and{" "}
        <a href="https://sharkfishchicken.com/tags/shrimp" className="text-primary hover:underline">Shrimp</a>
      </>
    ),
  },
  {
    id: "faq-2",
    question: "What meals do you serve?",
    answer: (
      <>
        We serve{" "}
        <a href="https://sharkfishchicken.com/tags/lunch" className="text-primary hover:underline">Lunch</a> and{" "}
        <a href="https://sharkfishchicken.com/tags/dinner" className="text-primary hover:underline">Dinner</a>
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Do you offer delivery or takeout?",
    answer: (
      <>
        Yes, we offer{" "}
        <a href="https://sharkfishchicken.com/tags/takeout" className="text-primary hover:underline">Takeout</a> and{" "}
        <a href="https://sharkfishchicken.com/tags/delivery" className="text-primary hover:underline">Delivery</a>
      </>
    ),
  },
  {
    id: "faq-4",
    question: "What areas do you serve?",
    answer: (
      <>
        We serve the following areas:{" "}
        <a href="https://sharkfishchicken.com/places/markham" className="text-primary hover:underline">Markham</a>,{" "}
        <a href="https://sharkfishchicken.com/sharksfishchicken-merrilville" className="text-primary hover:underline">Merrilville</a>,{" "}
        <a href="https://sharkfishchicken.com/sharksfishchicken-lancing" className="text-primary hover:underline">Lancing</a>,{" "}
        <a href="https://sharkfishchicken.com/sharksfishchicken-sauk-village" className="text-primary hover:underline">Sauk Village</a>,{" "}
        <a href="https://sharkfishchicken.com/places/riverdale" className="text-primary hover:underline">Riverdale</a>,{" "}
        <a href="https://sharkfishchicken.com/places/midlothian" className="text-primary hover:underline">Midlothian</a>,{" "}
        <a href="https://sharkfishchicken.com/places/dixmoor" className="text-primary hover:underline">Dixmoor</a>,{" "}
        <a href="https://sharkfishchicken.com/places/east-hazel-crest" className="text-primary hover:underline">East Hazel Crest</a>,{" "}
        <a href="https://sharkfishchicken.com/places/homewood" className="text-primary hover:underline">Homewood</a>,{" "}
        <a href="https://sharkfishchicken.com/places/berkeley" className="text-primary hover:underline">Berkeley</a>,{" "}
        <a href="https://sharkfishchicken.com/places/country-club-hills" className="text-primary hover:underline">Country Club Hills</a>,{" "}
        <a href="https://sharkfishchicken.com/places/bellwood" className="text-primary hover:underline">Bellwood</a>,{" "}
        <a href="https://sharkfishchicken.com/places/robbins" className="text-primary hover:underline">Robbins</a>,{" "}
        <a href="https://sharkfishchicken.com/places/phoenix" className="text-primary hover:underline">Phoenix</a>,{" "}
        <a href="https://sharkfishchicken.com/places/oak-forest" className="text-primary hover:underline">Oak Forest</a>,{" "}
        <a href="https://sharkfishchicken.com/places/elmhurst" className="text-primary hover:underline">Elmhurst</a>,{" "}
        <a href="https://sharkfishchicken.com/places/blue-island" className="text-primary hover:underline">Blue Island</a>,{" "}
        <a href="https://sharkfishchicken.com/places/westchester" className="text-primary hover:underline">Westchester</a>,{" "}
        <a href="https://sharkfishchicken.com/places/south-holland" className="text-primary hover:underline">South Holland</a>.
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="bg-background py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <h4 className="text-2xl font-semibold text-center text-foreground mb-8">
          Frequently asked questions
        </h4>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger className="text-left font-semibold text-foreground text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}