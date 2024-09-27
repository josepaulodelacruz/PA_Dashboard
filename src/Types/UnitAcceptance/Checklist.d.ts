
export type Unit = {
  id: string,
  date_today: string,
  unit_list_id: string,
  project: string,
  block: string,
  lot: string,
  model: string,
  buyers_name: string,
  date_processed: string,
  eic: string,
  contractor: string,
  prop_admin: string,
  const_warranty: string,
  ack_by: string,
  date_received: string,
  target_date: string,
  cert_by: string,
  checklists: Checklist[],
}


export type Checklist = {
  checklist_code: string,
  group: string,
  class: string,
  item: string,
  is_check: boolean,
  remarks: string
}
