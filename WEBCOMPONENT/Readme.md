## What are web components
    - Allows creating reusable `custom elements`
    



   No, `attributeChangedCallback` is not a user-defined function. It is a built-in lifecycle method in the Web Components API. This method is automatically called when one of thobserved attributes of a custom element is added, removed, or changed.
   
## How it works:
    Define Observed Attributes: You specify which attributes to monitor by using the static observedAttributes() method.
    React to Changes: When any of those attributes change, the browser automatically invokes `attributeChangedCallback` with the attribute name, the old value, and the new value.

=============

# Web Components: 
    - Allows you to create your own web HTML element with encapsuated functionality
     & to reuse it wherever required as part of code.
- Consist of 3 main technoligies
    1. Config Element: Set of JS APIs allows your own custom elements & it's behavior. Which can then b used as desired in your UI.
    2. Shadow Dom: Is a set of JS APIs for attaching an encapsulated "Shadow" DOM tree to an  Element - this is rendered separately from the Main document DOM therefore keeping your DOM
    and its functionality private to avoid any HTML collision.
    3. HTML Templates: 
    

