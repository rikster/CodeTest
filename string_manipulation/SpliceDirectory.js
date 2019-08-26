const fullSlug = "foundations/category/shopping/services/";

const getHrefFromSlug = slug => '/' + slug.split("/").filter(x => x !== '').slice(-2).join('/');

console.log(getHrefFromSlug(fullSlug));
