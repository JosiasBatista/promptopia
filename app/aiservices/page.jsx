
import AiServiceCard from '@components/AiServiceCard'
import React from 'react'

const AI_SERVICES = [
  {
    image: "leonardoai",
    title: "Leonardo Ai",
    description: "Create images based on prompts or inspired in other images. From realistic to hand draw style images you can build almost anything",
    serviceLink: "https://leonardo.ai/",
    serviceTag: "leonardoai"
  },
  {
    image: "chatgpt",
    title: "Chat GPT",
    description: "ChatGPT is an artificial intelligence language model developed by OpenAI. ChatGPT has been trained on a vast amount of data from the internet, allowing it to understand and generate human-like text. It can process and respond to a wide range of queries and conversational prompts, providing information, answering questions, and engaging in discussions.",
    serviceLink: "https://openai.com/blog/chatgpt",
    serviceTag: "chatgpt"
  },
  {
    image: "midjourney",
    title: "Midjourney",
    description: "Midjourney is a generative artificial intelligence program and service created and hosted by San Francisco-based independent research lab Midjourney, Inc. Midjourney generates images from natural language descriptions, called prompts",
    serviceLink: "https://www.midjourney.com",
    serviceTag: "midjourney"
  },
] 

const AiServiceCardList = () => {
  return (
    <div className="mt-16 prompt_layout">
      {AI_SERVICES.map((ai, index) => (
        <AiServiceCard
          key={index}
          aiService={ai}
        />
      ))}
    </div>
  )
}

const AiServices = () => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Great AI Services</span>
      </h1>

      <AiServiceCardList />
    </section>
  )
}

export default AiServices
