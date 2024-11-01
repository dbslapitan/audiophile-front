export interface Product{
    images: {
        mobile: {
            src: string,
            mediaQuery: string
        },
        tablet: {
            src: string,
            mediaQuery: string
        },
        desktop: {
            src: string,
            mediaQuery: string
        }
    }, 
    category: string, 
    name: string, 
    description: string, 
    urlSegment: string, 
    isNew: boolean,
    alt: string
}