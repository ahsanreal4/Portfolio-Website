export interface ProgrammingLanguage {
  name: string
  iconClassNames: string[]
}

export interface IProgrammingLanguages {
  introductionText: string
  programmingLanguages: ProgrammingLanguage[]
}

export type RenderProgrammingLanguageProps = {
  programmingLanguage: ProgrammingLanguage
}
