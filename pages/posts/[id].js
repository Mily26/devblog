import styles from '../../styles/Post.module.scss'

export default function Post({ post }) {
    return (
      <div className={styles.container}>
        <div><img src={post.cover_image} /></div>
        <div className={styles.articleContent}>
          
          <div className={styles.info}>
            <img src={post.user.profile_image} className={styles.profileImg}/>
            <p className={styles.username}>{post.user.name}</p>
            <p>{post.readable_publish_date}</p>
            </div>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p dangerouslySetInnerHTML={{__html:post.body_html}} className={styles.text}></p>
        </div>
          
      </div>
     
    )
  }
  
  export async function getServerSideProps({ params }) {
    const { id } = params;
   const data = await fetch(`https://dev.to/api/articles/${id}`)
   const json = await data.json()
    return {
      props: {
        post: json
      }
    };
  }