'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map(post => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const searchParams = useSearchParams();
  const aiServiceTag = searchParams.get('aiServiceTag');

  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt', { next: { revalidate: 60 }});
      const data = await response.json();

      setAllPosts(data);
      setSearchText(aiServiceTag || "")
    }

    fetchPosts();
  }, [])

  useEffect(() => {
    const filterAllPosts = setTimeout(() => {
      filterPosts(searchText);
    }, 1000)

    return () => {
      clearTimeout(filterAllPosts);
    }
  }, [searchText])

  const filterPosts = (textToCheck) => {
    const regex = new RegExp(textToCheck, "i");

    setSearchedResults(allPosts.filter((post) => (
      regex.test(post.creator.username) ||
      regex.test(post.tag) ||
      regex.test(post.prompt) ||
      regex.test(post.aiService)
    )))
  }

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag, a username or AI service"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={searchText.length > 0 ? searchedResults : allPosts}
        handleTagClick={(tag) => setSearchText(tag)}
      />
    </section>
  )
}

export default Feed