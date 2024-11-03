export interface Product{
    categoryImage: {
        mobile: string,
        tablet: string,
        desktop: string
    }, 
    category: string, 
    name: string, 
    description: string, 
    urlSegment: string, 
    isNew: boolean,
    alt: string
}

export interface Product2{
    "id": number,
    "slug": string,
    "name": string,
    "image": {
      "mobile": string,
      "tablet": string,
      "desktop": string
    },
    "category": string,
    "categoryImage": {
      "mobile": string,
      "tablet": string,
      "desktop": string
    },
    "new": boolean,
    "price": number,
    "description": string,
    "includes": {
        "quantity": number,
        "item": string
      }[],
    "gallery": {
        "first": {
            "mobile": string,
            "tablet": string,
            "desktop": string
        },
        "second": {
            "mobile": string,
            "tablet": string,
            "desktop": string
        },
        "third": {
            "mobile": string,
            "tablet": string,
            "desktop": string
        }
    },
    "others": 
    {
      "slug": string,
      "name": string,
      "image": {
        "mobile": string,
        "tablet": string,
        "desktop": string
      }
    }[]
  }