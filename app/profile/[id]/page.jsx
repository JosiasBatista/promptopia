"use client";

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  
  const searchParams = useSearchParams();
  const username = searchParams.get('name');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    if (params?.id) fetchPosts();
  }, [params.id])

  return (
    <Profile
      name={username}
      desc={`Welcome to ${username}'s profile page. See the amazing prompts created
      by ${username} and get inspired to use then or create your own!`}
      data={posts}
    />
  )
}

export default MyProfile;