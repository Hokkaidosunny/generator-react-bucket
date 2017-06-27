import { push } from 'react-router-redux';

export const goHomePage = () => {
  return push('/');
};

export const goArticlePage = (articleId = 0) => {
  return push(`/article/${articleId}`);
};

export const goEditPage = () => {
  return push('edit');
};
