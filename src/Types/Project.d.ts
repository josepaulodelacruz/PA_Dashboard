
export type Project = { 
  id: number,
  description: string,
  code: string,
  shortDesc: string,
  is_included: boolean,
  is_removed_from_list: boolean
}


export type UnitModel = {
  id: number,
  code: string,
  project_name: string,
  model: string,
  model_name: string,
  house_type: HouseType[]
}

export type HouseType = {
  type: string,
  check_lists: ModelCheckList[]
}

export type ModelCheckList = {
  id: number,
  group: string,
  class: string,
  item: string,
  is_applicable: boolean,
  house_type: string
}
