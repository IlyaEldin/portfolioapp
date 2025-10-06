import classes from "./Posts.module.css";

export default function Posts({ posts = [], users = [] }) {
  // Получаем имя пользователя по userId
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : `User ${userId}`;
  };

  // Получаем email пользователя по userId
  const getUserEmail = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.email : "";
  };

  // Сокращаем длинный текст
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className={classes.postsContainer}>
      <h2>Посты ({posts.length})</h2>

      {posts.length === 0 ? (
        <div className={classes.noResults}>Нет постов для отображения</div>
      ) : (
        <div className={classes.postsGrid}>
          {posts.map((post) => (
            <div key={post.id} className={classes.postCard}>
              <div className={classes.postHeader}>
                <div className={classes.userInfo}>
                  <span className={classes.userName}>
                    {getUserName(post.userId)}
                  </span>
                  <span className={classes.userEmail}>
                    {getUserEmail(post.userId)}
                  </span>
                </div>
                <span className={classes.postId}>#{post.id}</span>
              </div>

              <h3 className={classes.postTitle}>{post.title}</h3>

              <p className={classes.postBody}>{truncateText(post.body)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
