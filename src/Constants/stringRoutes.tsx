

type RouteName = {
  urlRoute: string,
  nameRoute: string
}



class StringRoutes {

  static login = '/auth/login'

  static dashboard = '/'

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
    nameRoute: 'Dashboard',
  }
]


export default StringRoutes


