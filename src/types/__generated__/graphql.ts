export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BlockScalar: { input: any; output: any }
  ISO8601DateTime: { input: any; output: any }
  JsonScalar: { input: any; output: any }
}

export type Alternate = {
  __typename?: 'Alternate'
  fullSlug: Scalars['String']['output']
  id: Scalars['Int']['output']
  isFolder?: Maybe<Scalars['Boolean']['output']>
  name: Scalars['String']['output']
  parentId?: Maybe<Scalars['Int']['output']>
  published: Scalars['Boolean']['output']
  slug: Scalars['String']['output']
}

export type Asset = {
  __typename?: 'Asset'
  alt?: Maybe<Scalars['String']['output']>
  copyright?: Maybe<Scalars['String']['output']>
  filename: Scalars['String']['output']
  focus?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type ContentItem = {
  __typename?: 'ContentItem'
  alternates?: Maybe<Array<Maybe<Alternate>>>
  content?: Maybe<Scalars['JsonScalar']['output']>
  content_string?: Maybe<Scalars['String']['output']>
  created_at?: Maybe<Scalars['String']['output']>
  default_full_slug?: Maybe<Scalars['String']['output']>
  first_published_at?: Maybe<Scalars['String']['output']>
  full_slug?: Maybe<Scalars['String']['output']>
  group_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  is_startpage?: Maybe<Scalars['Boolean']['output']>
  lang?: Maybe<Scalars['String']['output']>
  meta_data?: Maybe<Scalars['JsonScalar']['output']>
  name?: Maybe<Scalars['String']['output']>
  parent_id?: Maybe<Scalars['Int']['output']>
  path?: Maybe<Scalars['String']['output']>
  position?: Maybe<Scalars['Int']['output']>
  published_at?: Maybe<Scalars['String']['output']>
  release_id?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sort_by_date?: Maybe<Scalars['String']['output']>
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>
  uuid?: Maybe<Scalars['String']['output']>
}

export type ContentItems = {
  __typename?: 'ContentItems'
  items?: Maybe<Array<Maybe<ContentItem>>>
  total?: Maybe<Scalars['Int']['output']>
}

export type Datasource = {
  __typename?: 'Datasource'
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  slug: Scalars['String']['output']
}

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries'
  items: Array<DatasourceEntry>
  total: Scalars['Int']['output']
}

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry'
  dimensionValue?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type Datasources = {
  __typename?: 'Datasources'
  items: Array<Datasource>
}

export type FilterQueryOperations = {
  /** Must match all values of given array */
  all_in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>
  /** Greater than float value */
  gt_float?: InputMaybe<Scalars['Float']['input']>
  /** Greater than integer value */
  gt_int?: InputMaybe<Scalars['Int']['input']>
  /** Matches exactly one value */
  in?: InputMaybe<Scalars['String']['input']>
  /** Matches any value of given array */
  in_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Matches exactly one integer value */
  in_int?: InputMaybe<Scalars['Int']['input']>
  /** Matches exactly one value with a wildcard search using * */
  like?: InputMaybe<Scalars['String']['input']>
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: InputMaybe<Scalars['ISO8601DateTime']['input']>
  /** Less than float value */
  lt_float?: InputMaybe<Scalars['Float']['input']>
  /** Less than integer value */
  lt_int?: InputMaybe<Scalars['Int']['input']>
  /** Matches all without the given value */
  not_in?: InputMaybe<Scalars['String']['input']>
  /** Matches all without the given value */
  not_like?: InputMaybe<Scalars['String']['input']>
}

export type Link = {
  __typename?: 'Link'
  cachedUrl: Scalars['String']['output']
  email?: Maybe<Scalars['String']['output']>
  fieldtype: Scalars['String']['output']
  id: Scalars['String']['output']
  linktype: Scalars['String']['output']
  story?: Maybe<Story>
  url: Scalars['String']['output']
}

export type LinkEntries = {
  __typename?: 'LinkEntries'
  items: Array<LinkEntry>
}

export type LinkEntry = {
  __typename?: 'LinkEntry'
  id?: Maybe<Scalars['Int']['output']>
  isFolder?: Maybe<Scalars['Boolean']['output']>
  isStartpage?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  parentId?: Maybe<Scalars['Int']['output']>
  position?: Maybe<Scalars['Int']['output']>
  published?: Maybe<Scalars['Boolean']['output']>
  slug?: Maybe<Scalars['String']['output']>
  uuid?: Maybe<Scalars['String']['output']>
}

export type PageComponent = {
  __typename?: 'PageComponent'
  _editable?: Maybe<Scalars['String']['output']>
  _uid?: Maybe<Scalars['String']['output']>
  blocks?: Maybe<Scalars['BlockScalar']['output']>
  component?: Maybe<Scalars['String']['output']>
}

export type PageItem = {
  __typename?: 'PageItem'
  alternates?: Maybe<Array<Maybe<Alternate>>>
  content?: Maybe<PageComponent>
  created_at?: Maybe<Scalars['String']['output']>
  default_full_slug?: Maybe<Scalars['String']['output']>
  first_published_at?: Maybe<Scalars['String']['output']>
  full_slug?: Maybe<Scalars['String']['output']>
  group_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  is_startpage?: Maybe<Scalars['Boolean']['output']>
  lang?: Maybe<Scalars['String']['output']>
  meta_data?: Maybe<Scalars['JsonScalar']['output']>
  name?: Maybe<Scalars['String']['output']>
  parent_id?: Maybe<Scalars['Int']['output']>
  path?: Maybe<Scalars['String']['output']>
  position?: Maybe<Scalars['Int']['output']>
  published_at?: Maybe<Scalars['String']['output']>
  release_id?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sort_by_date?: Maybe<Scalars['String']['output']>
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>
  uuid?: Maybe<Scalars['String']['output']>
}

export type PageItems = {
  __typename?: 'PageItems'
  items?: Maybe<Array<Maybe<PageItem>>>
  total?: Maybe<Scalars['Int']['output']>
}

export type PostComponent = {
  __typename?: 'PostComponent'
  _editable?: Maybe<Scalars['String']['output']>
  _uid?: Maybe<Scalars['String']['output']>
  component?: Maybe<Scalars['String']['output']>
  content?: Maybe<Scalars['String']['output']>
  featured_img?: Maybe<Asset>
  title?: Maybe<Scalars['String']['output']>
}

export type PostFilterQuery = {
  title?: InputMaybe<FilterQueryOperations>
}

export type PostItem = {
  __typename?: 'PostItem'
  alternates?: Maybe<Array<Maybe<Alternate>>>
  content?: Maybe<PostComponent>
  created_at?: Maybe<Scalars['String']['output']>
  default_full_slug?: Maybe<Scalars['String']['output']>
  first_published_at?: Maybe<Scalars['String']['output']>
  full_slug?: Maybe<Scalars['String']['output']>
  group_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  is_startpage?: Maybe<Scalars['Boolean']['output']>
  lang?: Maybe<Scalars['String']['output']>
  meta_data?: Maybe<Scalars['JsonScalar']['output']>
  name?: Maybe<Scalars['String']['output']>
  parent_id?: Maybe<Scalars['Int']['output']>
  path?: Maybe<Scalars['String']['output']>
  position?: Maybe<Scalars['Int']['output']>
  published_at?: Maybe<Scalars['String']['output']>
  release_id?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sort_by_date?: Maybe<Scalars['String']['output']>
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>
  uuid?: Maybe<Scalars['String']['output']>
}

export type PostItems = {
  __typename?: 'PostItems'
  items?: Maybe<Array<Maybe<PostItem>>>
  total?: Maybe<Scalars['Int']['output']>
}

export type ProjectComponent = {
  __typename?: 'ProjectComponent'
  _editable?: Maybe<Scalars['String']['output']>
  _uid?: Maybe<Scalars['String']['output']>
  banner?: Maybe<Asset>
  component?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  github_link?: Maybe<Link>
  images?: Maybe<Array<Maybe<Asset>>>
  name?: Maybe<Scalars['String']['output']>
  short_description?: Maybe<Scalars['String']['output']>
  stack?: Maybe<Array<Maybe<Story>>>
  webiste_link?: Maybe<Link>
  work_in_progress?: Maybe<Scalars['Boolean']['output']>
  year?: Maybe<Scalars['String']['output']>
}

export type ProjectComponentStackArgs = {
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  language?: InputMaybe<Scalars['String']['input']>
  sort_by?: InputMaybe<Scalars['String']['input']>
}

export type ProjectFilterQuery = {
  name?: InputMaybe<FilterQueryOperations>
  short_description?: InputMaybe<FilterQueryOperations>
  stack?: InputMaybe<FilterQueryOperations>
  work_in_progress?: InputMaybe<FilterQueryOperations>
  year?: InputMaybe<FilterQueryOperations>
}

export type ProjectItem = {
  __typename?: 'ProjectItem'
  alternates?: Maybe<Array<Maybe<Alternate>>>
  content?: Maybe<ProjectComponent>
  created_at?: Maybe<Scalars['String']['output']>
  default_full_slug?: Maybe<Scalars['String']['output']>
  first_published_at?: Maybe<Scalars['String']['output']>
  full_slug?: Maybe<Scalars['String']['output']>
  group_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  is_startpage?: Maybe<Scalars['Boolean']['output']>
  lang?: Maybe<Scalars['String']['output']>
  meta_data?: Maybe<Scalars['JsonScalar']['output']>
  name?: Maybe<Scalars['String']['output']>
  parent_id?: Maybe<Scalars['Int']['output']>
  path?: Maybe<Scalars['String']['output']>
  position?: Maybe<Scalars['Int']['output']>
  published_at?: Maybe<Scalars['String']['output']>
  release_id?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sort_by_date?: Maybe<Scalars['String']['output']>
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>
  uuid?: Maybe<Scalars['String']['output']>
}

export type ProjectItems = {
  __typename?: 'ProjectItems'
  items?: Maybe<Array<Maybe<ProjectItem>>>
  total?: Maybe<Scalars['Int']['output']>
}

export type QueryType = {
  __typename?: 'QueryType'
  ContentNode?: Maybe<ContentItem>
  ContentNodes?: Maybe<ContentItems>
  DatasourceEntries?: Maybe<DatasourceEntries>
  Datasources?: Maybe<Datasources>
  Links?: Maybe<LinkEntries>
  PageItem?: Maybe<PageItem>
  PageItems?: Maybe<PageItems>
  PostItem?: Maybe<PostItem>
  PostItems?: Maybe<PostItems>
  ProjectItem?: Maybe<ProjectItem>
  ProjectItems?: Maybe<ProjectItems>
  RateLimit?: Maybe<RateLimit>
  Space?: Maybe<Space>
  StackItem?: Maybe<StackItem>
  StackItems?: Maybe<StackItems>
  Tags?: Maybe<Tags>
}

export type QueryTypeContentNodeArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['ID']['input']
  language?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeContentNodesArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>
  by_uuids?: InputMaybe<Scalars['String']['input']>
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>
  excluding_fields?: InputMaybe<Scalars['String']['input']>
  excluding_ids?: InputMaybe<Scalars['String']['input']>
  excluding_slugs?: InputMaybe<Scalars['String']['input']>
  fallback_lang?: InputMaybe<Scalars['String']['input']>
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['String']['input']>
  is_startpage?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  published_at_gt?: InputMaybe<Scalars['String']['input']>
  published_at_lt?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
  search_term?: InputMaybe<Scalars['String']['input']>
  sort_by?: InputMaybe<Scalars['String']['input']>
  starts_with?: InputMaybe<Scalars['String']['input']>
  with_tag?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeDatasourceEntriesArgs = {
  datasource?: InputMaybe<Scalars['String']['input']>
  dimension?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
}

export type QueryTypeDatasourcesArgs = {
  by_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  search?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeLinksArgs = {
  paginated?: InputMaybe<Scalars['Boolean']['input']>
  starts_with?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypePageItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['ID']['input']
  language?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypePageItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>
  by_uuids?: InputMaybe<Scalars['String']['input']>
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>
  excluding_fields?: InputMaybe<Scalars['String']['input']>
  excluding_ids?: InputMaybe<Scalars['String']['input']>
  excluding_slugs?: InputMaybe<Scalars['String']['input']>
  fallback_lang?: InputMaybe<Scalars['String']['input']>
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['String']['input']>
  is_startpage?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  published_at_gt?: InputMaybe<Scalars['String']['input']>
  published_at_lt?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
  search_term?: InputMaybe<Scalars['String']['input']>
  sort_by?: InputMaybe<Scalars['String']['input']>
  starts_with?: InputMaybe<Scalars['String']['input']>
  with_tag?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypePostItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['ID']['input']
  language?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypePostItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>
  by_uuids?: InputMaybe<Scalars['String']['input']>
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>
  excluding_fields?: InputMaybe<Scalars['String']['input']>
  excluding_ids?: InputMaybe<Scalars['String']['input']>
  excluding_slugs?: InputMaybe<Scalars['String']['input']>
  fallback_lang?: InputMaybe<Scalars['String']['input']>
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>
  filter_query_v2?: InputMaybe<PostFilterQuery>
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['String']['input']>
  is_startpage?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  published_at_gt?: InputMaybe<Scalars['String']['input']>
  published_at_lt?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
  search_term?: InputMaybe<Scalars['String']['input']>
  sort_by?: InputMaybe<Scalars['String']['input']>
  starts_with?: InputMaybe<Scalars['String']['input']>
  with_tag?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeProjectItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['ID']['input']
  language?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeProjectItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>
  by_uuids?: InputMaybe<Scalars['String']['input']>
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>
  excluding_fields?: InputMaybe<Scalars['String']['input']>
  excluding_ids?: InputMaybe<Scalars['String']['input']>
  excluding_slugs?: InputMaybe<Scalars['String']['input']>
  fallback_lang?: InputMaybe<Scalars['String']['input']>
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>
  filter_query_v2?: InputMaybe<ProjectFilterQuery>
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['String']['input']>
  is_startpage?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  published_at_gt?: InputMaybe<Scalars['String']['input']>
  published_at_lt?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
  search_term?: InputMaybe<Scalars['String']['input']>
  sort_by?: InputMaybe<Scalars['String']['input']>
  starts_with?: InputMaybe<Scalars['String']['input']>
  with_tag?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeStackItemArgs = {
  find_by?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['ID']['input']
  language?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeStackItemsArgs = {
  by_slugs?: InputMaybe<Scalars['String']['input']>
  by_uuids?: InputMaybe<Scalars['String']['input']>
  by_uuids_ordered?: InputMaybe<Scalars['String']['input']>
  excluding_fields?: InputMaybe<Scalars['String']['input']>
  excluding_ids?: InputMaybe<Scalars['String']['input']>
  excluding_slugs?: InputMaybe<Scalars['String']['input']>
  fallback_lang?: InputMaybe<Scalars['String']['input']>
  filter_query?: InputMaybe<Scalars['JsonScalar']['input']>
  filter_query_v2?: InputMaybe<StackFilterQuery>
  first_published_at_gt?: InputMaybe<Scalars['String']['input']>
  first_published_at_lt?: InputMaybe<Scalars['String']['input']>
  from_release?: InputMaybe<Scalars['String']['input']>
  is_startpage?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  published_at_gt?: InputMaybe<Scalars['String']['input']>
  published_at_lt?: InputMaybe<Scalars['String']['input']>
  resolve_links?: InputMaybe<Scalars['String']['input']>
  resolve_relations?: InputMaybe<Scalars['String']['input']>
  search_term?: InputMaybe<Scalars['String']['input']>
  sort_by?: InputMaybe<Scalars['String']['input']>
  starts_with?: InputMaybe<Scalars['String']['input']>
  with_tag?: InputMaybe<Scalars['String']['input']>
}

export type QueryTypeTagsArgs = {
  starts_with?: InputMaybe<Scalars['String']['input']>
}

export type RateLimit = {
  __typename?: 'RateLimit'
  maxCost: Scalars['Int']['output']
}

export type Space = {
  __typename?: 'Space'
  domain: Scalars['String']['output']
  id: Scalars['Int']['output']
  languageCodes: Array<Maybe<Scalars['String']['output']>>
  name: Scalars['String']['output']
  version: Scalars['Int']['output']
}

export type StackComponent = {
  __typename?: 'StackComponent'
  _editable?: Maybe<Scalars['String']['output']>
  _uid?: Maybe<Scalars['String']['output']>
  component?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Link>
}

export type StackFilterQuery = {
  name?: InputMaybe<FilterQueryOperations>
}

export type StackItem = {
  __typename?: 'StackItem'
  alternates?: Maybe<Array<Maybe<Alternate>>>
  content?: Maybe<StackComponent>
  created_at?: Maybe<Scalars['String']['output']>
  default_full_slug?: Maybe<Scalars['String']['output']>
  first_published_at?: Maybe<Scalars['String']['output']>
  full_slug?: Maybe<Scalars['String']['output']>
  group_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  is_startpage?: Maybe<Scalars['Boolean']['output']>
  lang?: Maybe<Scalars['String']['output']>
  meta_data?: Maybe<Scalars['JsonScalar']['output']>
  name?: Maybe<Scalars['String']['output']>
  parent_id?: Maybe<Scalars['Int']['output']>
  path?: Maybe<Scalars['String']['output']>
  position?: Maybe<Scalars['Int']['output']>
  published_at?: Maybe<Scalars['String']['output']>
  release_id?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sort_by_date?: Maybe<Scalars['String']['output']>
  tag_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>
  uuid?: Maybe<Scalars['String']['output']>
}

export type StackItems = {
  __typename?: 'StackItems'
  items?: Maybe<Array<Maybe<StackItem>>>
  total?: Maybe<Scalars['Int']['output']>
}

export type Story = {
  __typename?: 'Story'
  alternates?: Maybe<Array<Maybe<Alternate>>>
  content?: Maybe<Scalars['JsonScalar']['output']>
  createdAt?: Maybe<Scalars['String']['output']>
  firstPublishedAt?: Maybe<Scalars['String']['output']>
  fullSlug?: Maybe<Scalars['String']['output']>
  groupId?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  isStartpage?: Maybe<Scalars['Boolean']['output']>
  lang?: Maybe<Scalars['String']['output']>
  metaData?: Maybe<Scalars['JsonScalar']['output']>
  name?: Maybe<Scalars['String']['output']>
  parentId?: Maybe<Scalars['Int']['output']>
  path?: Maybe<Scalars['String']['output']>
  position?: Maybe<Scalars['Int']['output']>
  publishedAt?: Maybe<Scalars['String']['output']>
  releaseId?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sortByDate?: Maybe<Scalars['String']['output']>
  tagList?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  translatedSlugs?: Maybe<Array<Maybe<TranslatedSlug>>>
  uuid?: Maybe<Scalars['String']['output']>
}

export type Tag = {
  __typename?: 'Tag'
  name: Scalars['String']['output']
  taggingsCount: Scalars['Int']['output']
}

export type Tags = {
  __typename?: 'Tags'
  items: Array<Tag>
}

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug'
  lang: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  path?: Maybe<Scalars['String']['output']>
}

export type GetPageItemQueryVariables = Exact<{
  pageItemId: Scalars['ID']['input']
}>

export type GetPageItemQuery = {
  __typename?: 'QueryType'
  PageItem?: {
    __typename?: 'PageItem'
    content?: { __typename?: 'PageComponent'; blocks?: any | null } | null
  } | null
}

export type GetPostItemsQueryVariables = Exact<{ [key: string]: never }>

export type GetPostItemsQuery = {
  __typename?: 'QueryType'
  PostItems?: {
    __typename?: 'PostItems'
    items?: Array<{
      __typename?: 'PostItem'
      name?: string | null
      id?: number | null
      slug?: string | null
      full_slug?: string | null
    } | null> | null
  } | null
}

export type GetProjectItemQueryVariables = Exact<{
  projectItemId: Scalars['ID']['input']
}>

export type GetProjectItemQuery = {
  __typename?: 'QueryType'
  ProjectItem?: {
    __typename?: 'ProjectItem'
    content?: {
      __typename?: 'ProjectComponent'
      description?: string | null
      name?: string | null
      work_in_progress?: boolean | null
      year?: string | null
      github_link?: { __typename?: 'Link'; url: string } | null
      images?: Array<{
        __typename?: 'Asset'
        id?: number | null
        name?: string | null
        filename: string
      } | null> | null
      stack?: Array<{
        __typename?: 'Story'
        name?: string | null
        content?: any | null
      } | null> | null
      webiste_link?: { __typename?: 'Link'; url: string } | null
    } | null
  } | null
}

export type GetProjectItemsQueryVariables = Exact<{ [key: string]: never }>

export type GetProjectItemsQuery = {
  __typename?: 'QueryType'
  ProjectItems?: {
    __typename?: 'ProjectItems'
    total?: number | null
    items?: Array<{
      __typename?: 'ProjectItem'
      name?: string | null
      id?: number | null
      slug?: string | null
      full_slug?: string | null
    } | null> | null
  } | null
}

export type GetProjectItemsOverviewQueryVariables = Exact<{
  [key: string]: never
}>

export type GetProjectItemsOverviewQuery = {
  __typename?: 'QueryType'
  ProjectItems?: {
    __typename?: 'ProjectItems'
    items?: Array<{
      __typename?: 'ProjectItem'
      slug?: string | null
      content?: {
        __typename?: 'ProjectComponent'
        name?: string | null
        short_description?: string | null
        banner?: {
          __typename?: 'Asset'
          id?: number | null
          filename: string
        } | null
      } | null
    } | null> | null
  } | null
}
