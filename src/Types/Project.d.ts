
export type Project = { 
  id: number,
  description: string,
  code: string,
  shortDesc: string,
  is_included: boolean,
  is_remove_from_list: boolean
}


export type UnitModel = {
  id: number,
  code: string,
  description: string,
  model: string,
  model_name: string,
  check_lists: ModelCheckList[]
}


export type ModelCheckList = {
  id: number,
  group: string,
  class: string,
  item: string,
  is_applicable: boolean
}
