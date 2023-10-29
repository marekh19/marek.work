export const ROUTES = {
  home: '/',
  projects: '/projects',
  projectDetail: (slug: string) => `/projects/${slug}`,
  posts: '/posts',
  postDetail: (slug: string) => `/posts/${slug}`,
}
