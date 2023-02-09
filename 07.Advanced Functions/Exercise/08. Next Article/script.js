function getArticleGenerator(articles) {
  //   const divElement = document.getElementById('content');
  //   const articleElement = document.createElement('article');
  //   articleElement.textContent = '';

  //   return () => {
  //     if (articles.length > 0) {
  //       divElement.appendChild(articleElement);
  //       articleElement.textContent = articles.shift();
  //     } else {
  //       return null;
  //     }
  //   };
  // }

  return () => {
    if (articles.length > 0) {
      const divElement = document.getElementById('content');
      const articleElement = document.createElement('article');
      divElement.appendChild(articleElement);
      articleElement.textContent = articles.shift();
    } else {
      return;
    }
  };
}
