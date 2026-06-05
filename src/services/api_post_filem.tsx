function post_Filme(link: string) {
  const baseURL= "https://image.tmdb.org/t/p/w500";

  return `${baseURL}${link}`;
}

export default post_Filme;
