function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const getReadTime = () => {
      if (minutes < 30) {
        return "☕️".repeat(Math.ceil(minutes / 5));
      } else {
        return "🍱".repeat(Math.ceil(minutes / 10));
      }
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date} • {getReadTime()} {minutes} min read
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;
  