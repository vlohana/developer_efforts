. Helps to create new custom html elements to use in webapps.
 : custom elements: 
        CustomElements.define("hello-world", Helloworld)
: Shadow Dom: 
    Helps to encapsulate the custom element, and keep it in isolation, so that it is not updated by other
    external operations.
: Template: 
    template and Slot


LifeCycle: 
    - Element created/initialization.
    - inserted into DOM
    - Updated via events like click change form , submit etc.
    - Delete from DOM.

Constructor(): for initialize component state/ setting up eventListeneres/ create instance of shadowDom.
connectedCallback(): Element added to the DOM, we can setAttribute, fetch resources, render templates
disconnectedCallback(): cleanup, stopInterval, free resources that won't be GC'ed automatically.
attributeChangedCallback(name, oldval,new): when an attribute of an elmement change to perform action. 
    observedAttributes(){ return ['hello-world-attr1','my-custom-element-attr1']}
adobptedCallback(): when custom element moves from one document to another document, when using iFrames.


#Shadow Dom:
    - Encapsulate styles and structure of a component
    - Create a isolated element.
    -  Modes
        : Open: Allows access to Shadowroot through JS.
        : close: return null, do not allow access through JS

# Slots :
    Content placeholders, which holds content inside a custom element.