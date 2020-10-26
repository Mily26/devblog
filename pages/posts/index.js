import Link from 'next/link'
import styles from '../../styles/Posts.module.scss'

export default function Posts({ posts }) {
    return (
      posts.map((post, key) => {
        return (
          <Link href={`/posts/${post.id}`} key={key}>
            <div className={styles.post}>
              <div><img src={post.user.profile_image} className={styles.userPic} /></div>
              <div className={styles.content}>
                <p className={styles.name}>{post.user.name}</p>
                <p className={styles.date}>{post.readable_publish_date}</p>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p>{post.description}</p>
                <div className={styles.commentsAndReactions}>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adqvg4u29g3ykjn299j3uwcbqkoszv4s" class="crayons-icon"><title id="adqvg4u29g3ykjn299j3uwcbqkoszv4s">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>{post.comments_count}  comments</p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a5v0hn77cs78rm45ct5qxpxg8x7dryjm" class="crayons-icon"><title id="a5v0hn77cs78rm45ct5qxpxg8x7dryjm">Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>{post.public_reactions_count}   reactions</p>
                </div>
                
              </div>
              
            </div>
          </Link>
        )
      })
    )
}
        
  
  export async function getStaticProps() {
    const data = await fetch("https://dev.to/api/articles?tag=javascript&top=1");
    const json = await data.json();
  
    return {
      props: {
        posts: json
      },
      revalidate: 3600
    };
  }