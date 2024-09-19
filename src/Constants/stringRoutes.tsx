

type RouteName = {
  urlRoute: string,
  nameRoute: string
}



class StringRoutes {
  static login = '/auth/login'

  static dashboard = '/project'
  static project_list = '/project/list'
  static view_project = '/project/view'

  static punchlist = '/punchlist'
  static punclist_with_warranty = '/punchlist/with-warranty'
  static punchlist_beyond_warranty = '/punchlist/beyond-warranty'

  properlyParseNameRoute = (key: string) => {
    return items.find(item => {
      if(item.urlRoute === key) {
        return item.nameRoute
      }
    })
  }

}


const items: RouteName[] = [
  {
    urlRoute: StringRoutes.punchlist,
    nameRoute: 'Punchlist',
  },
  {
    urlRoute: StringRoutes.punclist_with_warranty,
    nameRoute: 'With Warranty',
  },
  {
    urlRoute: StringRoutes.punchlist_beyond_warranty,
    nameRoute: 'Beyond Warranty',
  }
]


export default StringRoutes


