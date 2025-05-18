
# Syntax
Selector {
    prop1: val1;
    prop2: val2;
}

example:
    h1 {
        color: blue
    }

# Css Selectors: 
    1. Element
        ==>  h1 {color:blue}

    2. Class 
        <button class="abc def">Title</button>
        =syntax=> .class-name {prop:value;}
        =Example==> 
        .abc {
                padding: 10px;
                color:white
        }
        .def {
            background-color:green;
            pointer: mouse;
        }
    button will have prop of both abc & def


    3. Id
        <h1 id='main-header'>Heading</h1>
        #id {
            property:value;
        }

# Css Selector Combinations
1)  .selector1.selector2 {
        property:value;
    }

    Example 1 
    <h1 class="large-heading">
        Title
    </h1>
    
    ==>
    h1.large-heading {
        font-size:200%
    }


    <h1 id="big-blue" class="large blue">
    Title
    </h1>

     ==>
    #big-blue.large.blue {
        color:blue;
        font-size:200%
    }

2. ancestor child combination
    .ancestor .child {
        property:valuel
    }

    <div>
        <p>Selected</p>
        <p>Selected</p>
        <span>
        <p>Selected</p>
        </span>
    <div>
    => for all p under the div
    css: 
    div p {
        color:red;
    }


    <header class="main-header">
        <h1 class="brown">Selected</h1>
    </header>
    ==> to select all h1 headers with class brown with main header "main-header"
    Css: 
     header.main-header h1.brown{
        color:brown;
     }

3. to share values between the css

        .big {
            font-size:200
        }

        .large{
            font-size:200
        }
    ==> then to have common values
        .big, .large {
            font-size:200
        }

    * {
        font-family: Arial
    }
    default css property

# How to load CSS.
    -  ### inline: written inside the HTML element using Styles property.
        <h1 styles="color:blye">blueTitle</h1>
        ==> Not a good approach, slow loading and less modular or reusable.
    - ### Style Element 
        <head>
            <style>
                .blue{
                    color:blue;
                }
            </style>
        </head>
        ==> not reusable
    - ### separate css file.
            <head>
                <link rel="stylesheet" href="style.css">
            </head>
        ==> link is empty element to link files to html
        => rel (relation) is stylesheet 
        ==> href location of the file.
# Hies