

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

  static properlyParseNameRoute = (key: string): string | undefined => {
    const item = items.find(item => item.urlRoute === key);
    return item ? item.nameRoute : undefined;
  };

  static properlyParseEachNaedRoute = (route: string): string | undefined => {
    // Split the route by "/"
    const parts = route.split('/').filter(Boolean);

    // Capitalize the first letter of each word and replace hyphens with spaces
    const formattedParts = parts.map(part =>
      part
        .split('-') // Split by hyphen to handle multi-word parts
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
        .join(' ') // Join the words with a space
    );

    // Join the formatted parts with a comma and space
    return formattedParts.join(', ');
  }


}


const items: RouteName[] = [
  {
    urlRoute: StringRoutes.dashboard,
    nameRoute: 'Setup Checklist',
  },
  {
    urlRoute: StringRoutes.project_list,
    nameRoute: 'List'
  },
  {
    urlRoute: StringRoutes.view_project,
    nameRoute: 'View'
  },
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


