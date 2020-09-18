This exercise consists in copying the HTML/CSS page with a React component structure.
It's my first exercise related to React.
There's only one view available.
The original HTML code was split into many components as an exercise. 

CategoriesInDB and CategoryCard show a map function for generating multiple cards from one component.

PageContentTop and TopRowSmallCard show a map function  for multiple cards, and also shows how to use props values on the component.

NavitemUserInfo uses userName and userAvatar variables.
NavitemUserInfo userAvatar image uses 'require' instead of 'import' 
- !!! userAvatar definition should be improved.

Here's an example of differencies between React and HTML, found in LastProductInDB.js :
<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: `25rem`}} src={productDummy} alt="product dummy"/>
- className instead of class
- img tag adds / at the end
- 'style=' rules

Here's a syntax example of using props into HTML tag:
<div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>