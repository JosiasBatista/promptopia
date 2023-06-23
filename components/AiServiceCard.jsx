"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AiServiceCard = ({ aiService }) => {
  const router = useRouter();

  const searchForPrompts = () => {
    router.push(`/?aiServiceTag=${aiService.serviceTag}`)
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center
          gap-3 cursor-pointer"
        >
          <Image 
            src={`/assets/images/${aiService.image}.svg`}
            alt="ai_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold
            text-gray-900">
              {aiService.title}
            </h3>
          </div>
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {aiService.description}
      </p>

      <Link className="font-inter text-sm blue_gradient cursor-pointer"
        href={aiService.serviceLink}
      >
        Visit {aiService.title}
      </Link>

      <p className="font-inter text-sm orange_gradient cursor-pointer"
        onClick={searchForPrompts}
      >
        Search for {aiService.title} prompts
      </p>

    </div>
  )
}

export default AiServiceCard