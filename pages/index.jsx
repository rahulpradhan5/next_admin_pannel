import React from 'react'
import { useRouter } from 'next/router'
const Index = () => {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}

export default Index

