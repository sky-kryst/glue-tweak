# glue-tweak
## Abstract: To check if tweakcn themes work with gluestack components
## Procedure:
1. Create expo project
2. Run init glue-stack
3. Configure `tailwind.config.js` and nativewind
4. Add tweakcn theme
5. Test styles with the Button component
## Results:
tweakcn styles do not apply to glue-stack library as it probably attaches itself to DOM elements and not custom native elements
## Further Inspection:
Maybe the styling library can be made to believe the native components are DOM elements by modifying the tag names during import. This way, hopefully it adds its styles to the component even though some of the styles( accessibility specific) might not be applicable
