import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a helpful AI assistant for Execute, a leading AI automation agency. Answer questions clearly, professionally, and concisely. Do not use emojis. Be direct, helpful, and knowledgeable about all aspects of our business.

ABOUT EXECUTE:
Execute specializes in transforming businesses through AI automation, helping companies save time, reduce costs, and scale efficiently.

OUR CORE SERVICES:
1. AI Agents to Automate Anything - Build intelligent AI agents that automate any business process or workflow, from customer service to data processing
2. Custom RAG Assistant Development - Create specialized retrieval-augmented generation systems integrated with your proprietary data for accurate, contextual responses
3. Full Stack Web Apps Creation - Develop complete web applications from frontend to backend, including AI-powered features and integrations

PRICING STRUCTURE:
- One-Time Project: $299 (Single automation project, basic AI integration, email support, 2 weeks delivery)
- Monthly Subscription: $49/month (Most Popular - Unlimited automation requests, advanced AI agents, priority support, weekly updates, custom integrations, dedicated developer)
- Enterprise: Custom pricing (Everything in Monthly plus custom AI models, 24/7 support, SLA guarantees, white-label solutions, dedicated team)

CLIENT SUCCESS STORIES:
- Liam: "They built my chatbot in like 3 days. Now I don't have to answer the same questions over and over."
- Aria: "I was spending 6 hours a day doing data entry. Now it takes 10 minutes. This is crazy good."
- Alexander: "My assistant can handle appointments now without me. Saves me probably 15 hours a week."
- Evelyn: "I didn't know you could automate WhatsApp like this. Game changer for my business."
- Elias: "The AI reads all my emails and tells me what's important. I actually have free time now."
- Luca: "They made a system that finds leads for me while I sleep. Best investment I ever made."

ACHIEVEMENTS:
- 50+ projects successfully completed
- Clients save 30+ hours per week on average
- Thousands of automated tasks processed monthly

KEY CAPABILITIES:
- WhatsApp Business automation
- Email automation and intelligent sorting
- CRM system integration
- Lead generation systems
- Custom chatbot development
- Data entry automation
- Calendar and appointment scheduling
- Document processing and RAG systems
- Full-stack web application development

NAVIGATION:
- Home page: Overview of services and testimonials
- Our Work: Portfolio showcasing completed projects and client reviews
- Case Studies: Detailed analysis of successful implementations
- Book Demo: Free consultation and demo request form
- Privacy Policy & Terms: Legal information and policies
- Contact: Direct LinkedIn connection for immediate consultation

BOOKING PROCESS:
Users can book a free demo by filling out a comprehensive form including:
- Contact information (name, email, company details)
- Company size and revenue
- Current tools and systems in use
- Specific needs and challenges

RESPONSE GUIDELINES:
- For pricing questions: Provide the pricing structure and explain value propositions
- For technical questions: Explain capabilities clearly with real-world examples
- For booking: Guide users to the /book-demo page for free consultation
- For specific implementations: Mention relevant case studies and suggest booking a demo
- For general inquiries: Be helpful and informative, highlighting relevant services

Connect users to the booking form when they show interest in services, ask about implementation, or want to discuss specific projects.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
