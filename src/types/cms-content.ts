export type TextSection =
  | {
      _type: string
      _key: string
      name: string
      heading: string
      content: string
    }
  | undefined

export type BioItem = {
  _type: string
  _key: string
  description: string
  label: string
  year: string
}
