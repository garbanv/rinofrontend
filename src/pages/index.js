import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  console.log("data",data)
  return (
    <Layout>
    <main className=" items-center justify-between ">
    <section id="featured">
      <div className="container mx-auto ">
        <div className="flex justify-center">
          <iframe
            className="featured-video"
            width="100%"
            height="720"
            src={`https://www.youtube.com/embed/FssULNGSZIA`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
    <section id="work" className="">
      <div className="container mx-auto">
        <div className="work-video-container grid md:grid-cols-2 grid-cols-1">
          {data?.map((video, index) => {
            const video_id = video?.attributes.video_id.split('?v=')[1]
            console.log("video_id",video_id)
            console.log("video", video.attributes.title)
            
            return (
              <div className="video_img_container" key={index}>
                <Link href={`/work/${video.attributes.slug}`}>
                  <img
                    src={`http://img.youtube.com/vi/${video_id}/maxresdefault.jpg`}
                    alt="Avatar"
                    className="image"
                  />
                  <div className="overlay">
                    <div className="text">{video.attributes.title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </main>
  </Layout>
  )
}


export async function getServerSideProps() {

  try {
    const res = await fetch('https://rinoarreazaserver-dev-rfec.3.us-1.fl0.io/api/posts')
    const data = await res.json()
    return { props: data }
  } catch (error) {
    return {props: {data:{message:"no data"}}}
  }
 
}
 
