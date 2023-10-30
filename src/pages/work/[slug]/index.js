import React from 'react'
import Layout from '@/components/Layout'

export default function index({data}) {
    console.log("data", data)
  return (
    <Layout>
<section id="work-page">
  <div className="container mx-auto work-page my-10">
   <h1 className="md:px-0 px-5"> {data[0]?.attributes?.title}</h1>

    <div dangerouslySetInnerHTML={{__html: data[0]?.attributes.content }} className="md:px-0 px-5"/>
  </div>
</section>
</Layout>
  )
}


export async function getServerSideProps(ctx) {
    const slug= ctx.params.slug

    try {
      const res = await fetch(`https://rinoarreazaserver-dev-rfec.3.us-1.fl0.io/api/posts?filters[slug]=${slug}&populate[featured_img]=*`)
      const data = await res.json()
      return { props: data }
    } catch (error) {
      return {props: {data:{message:"no data"}}}
    }
   
  }