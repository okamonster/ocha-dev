export type Skill = {
  name: string
  imageUrl: string
  categorie:
    | 'markup'
    | 'language'
    | 'framework'
    | 'library'
    | 'database'
    | 'runtime'
    | 'platform'
    | 'software'
    | 'other'

  genle?: Array<string>
}
