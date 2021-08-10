export type OrgRoamGraphResponse = {
  nodes: OrgRoamNode[] | null
  links: OrgRoamLink[] | null
  tags: string[] | null
}

export type OrgRoamNode = {
  id: string
  file: string
  title: string
  level: number
  properties: {
    [key: string]: string | number
  }
  tags: string[]
}

export type OrgRoamLink = {
  source: string
  target: string
  type: string
}
