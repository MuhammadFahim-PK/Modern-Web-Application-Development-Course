books url = https://freecomputerbooks.com/top-javascript-books.html

#   Javascript history

    JavaScript was created by American computer programmer Brendan Eich in May 1995 while working at Netscape Communications Corporation. The language was developed in just 10-15 days to add interactivity to the Netscape Navigator web browser.

    Key Facts About JavaScript's Creation

    Creator: Brendan Eich.

    Organization: Netscape Communications Corp..

    Year: 1995.

    # Original Names: It was initially code-named "Mocha," then briefly "LiveScript," before being renamed "JavaScript" as a marketing tactic to capitalize on the popularity of the Java programming language, despite the two being unrelated.

    # Standardization: To ensure consistency across different browsers and avoid a "browser war," Netscape submitted the language to the ECMA (European Computer Manufacturers Association) international standards organization in 1996. This resulted in the standardized language being officially named ECMAScript (ECMA-262 standard) in June 1997.

#   Words vs Keywords

    Definition of Keywords : js main aisa words jinse kuch ho sakta hai woh sare words js ke keywords hian, Keyword asa word hota he jis sa koi matlab hota he, javascript main aasay words jin se hum kuch ker sakte hain woh JS ke keywords hain.

    Definition of Words : Js main jin words se kuch bhi kam nahi ker sakte hain to woh words hain. mean aasay words jin ka koi matlab nahi he worh words hain.

#   📦 Chapter 1: Variables & Declarations - (JavaScript – Learn Everything Series by Sheryians Coding School)

    Question : Why we use Variables?

    Definition : We use variable, by which we can store data in memory, and by this we can use that data in future.

    Question : Difference Between var, let & const

    1: var

    Definition and issue with "var"

    1: jab bhi hum "var" ko use kerte hain to "var apnay app ko "window" main add kerta hai.

    2: jab bhi hum "var" ko use kerte hain to "var" hamesha funcation scoped hota hai, mean yeah sirf funcation main use hota hai.

    3: jab bhi hum "var" ko use kerte hain to "var" ko same name se phire se re-declare ker sakte hain, and error nahi aaega.

    Example : ' var userName = "Fahim"; , var userName = "Faisal";

    Example with (var, let, const) - can use but this is not use in regualr life code cycle

    userName - "Fahim";

    Examples of "var"

    var a = 12;

    var userName;

    var userName = "Fahim";

    var number = ((23x12-89)%45)\*122;

    Example of "let"

    1: when we know that value will change in future so we use "let". only one time variable name use in let, we can not re-declare variable in let.

    2: let – Modern and safe
    Scoped to blocks ( {} )
    Can be reassigned but not redeclared

    let userName;

    Let userName = "Fahim";

    Example of "const"

    const userName; ( this is not allow, and this is error)

    const userName = "Fahim"

    const definition

    Definition :  const use when we know that value will not change from start to end.

#   Topic 2 : declaration and initialization

    What is declaration? : ager hum koi variable banate hain mager us ko koi value assign nahi kerte hain to yeah declaration kehlata he. jase ( var a; , let a; , const a; (we can not do this) ),

    What is initialization? : mean first value dena, mean jab hum variable create kerte hain and usi time 1st value bhi us variable ko assign ker dete hain to yeah declare and initialuaction kehlata he. jase ( var a = 20, let a = 20, const a = 20; )

#   Scope (global, block, functional)

    What is Scope ( mean daira kia he mean kahan tak use ho sakta he)

    What is global Scope

    var a = 12; (aasa koi bhi variable jo ke kisi bee curly braces"{}" main nahi hai. aasa variable, global scope kehlata he. mean isay pore code main kaheen bhi use ker sakte hain. var do not respect block"{}" scope.)

    What is Block Scope
    {
        let userName = "Fahim";
    }

    let is respect block scope and it will use within block.

    What is Funcation Scope
    funbcation abcd() {
        var userName = "Fahim"
    }

    var , Funcation scope hota hai mean, var jis bhi funcation mian declear ho ga woh use funcation main kahen bhi use ho sakta hai.

#   What is Reassignment, Redeclaration

    Reassignment mean : mean wapis variable ko value dena, like

    var a = 125;
    a = 150;

    let b = 456;
    b = 789;

    Redeclaration mean : phire se declare kerna like, redeclaration is possible with "var" , but not allowed with "let" and "const"

    var a = 369;
    var a = 696;

    redeclaration sirf hum var ko ker sakte hain , let and const same name se redeclare nahi ho sakte hain.

#   Temporal Dead Zone

    Define : utna Area jitnay mian JS ko pata to he ke Variable exist karta hain par woh app ko value nahi de sakta, vable bane se pehalay uper jitna area he woh us variable ka TDZ hai. TDZ "let" and "const" main hota he, "var" main TDZ nahi hota hai.

    console.log(a);

    let a = 12;

#   Hoisting Impact Per Type

    What is Hoisting : ek variable ko jab JS main banaatay hain, to woh variable 2 hisson main toot jata hai and us ka declare part uper chala jata hai and uska initialization part neeche reah jata hai. as per Sheryian Hoising 3no main hote hai, let and const ko tab tak access nahi ker sakte hain jab tak woh initialization nahi hota, jab ke var ko bina initialization ke access ker sakte hain, kyun ka var ke by-default value "undefined" hote hai

    like :

    var a = 21;

    var a =  undefined;
    console.log(a);
    a = 12;

    var => Hoist hota hai => undefined

    let => Hoist hota hai => X (Reference error aata he (can not access before initialization))

    const => Hoist hota hai => X (Reference error aata he (can not access before initialization))

#   What is String Concatenation in JavaScript

    String concatenation is the process of combining two or more values into a single string.

    ## Methods

    ### 1. Using the + Operator

    The `+` operator joins strings.

    ```js
    "Hello" + " " + "World"  // "Hello World"

    "Age: " + 25  // "Age: 25"

    const age = 25;
    `Age: ${age}`  // "Age: 25"

    "5" + 1   // "51" (string concatenation)
    "5" - 1   // 4    (number conversion)

#   Type Coercion

    In JavaScript, type coercion is the automatic (implicit) conversion of values from one data type to another during operations.

    JavaScript performs type coercion when operands are of different types.

    ## Operator Behavior

        - The `+` operator is special:
        - If either operand is a string, it performs **string concatenation**
        - Example:
        "10" + 10  // "1010"

        - Other arithmetic operators (`-`, `*`, `/`, `%`) convert values to numbers:
        - Example:
        "10" - 10  // 0

    ## Important Notes

        - Type coercion happens during evaluation. It does NOT permanently change variable types.
        - JavaScript tries to convert values in a way that allows the operation to succeed.

    ## Example

        /*  js  */
        var numOne = "10";
        var numTwo = 10;

        var numTotal = numOne - numTwo;
        console.log(numTotal); // 0

#   What is `` - Backticks (template strings)

    ES6 template literals (also called template strings) are a modern way to create and manipulate strings in JavaScript using backticks (`) instead of standard quotes

    Key Features
        Backticks (`) Syntax: They are defined by backticks instead of single or double quotes.
        String Interpolation: You can embed variables or expressions directly into the string using the ${expression} syntax. This eliminates the need for manual concatenation with the + operator.
        Multi-line Strings: Unlike standard strings, template literals preserve line breaks without requiring escape characters like \n.
        Expression Evaluation: Any valid JavaScript expression, including math, logic, or function calls, can be placed inside the ${} placeholders.
        Tagged Templates: These allow you to prefix a template literal with a function name, which can then parse the literal parts and embedded expressions for advanced manipulation.

        Examples
        Feature         Code Example
        Interpolation	const name = 'Alice'; `Hello, ${name}!`
        Multi-line	    `This is a string`<br>`on multiple lines`
        Expressions	    `The sum is ${5 + 10}.`
        Functions	    `Total: ${calculateTotal(price)}`

#   Variable Names Legal and Illegal

    user camelCase for proper naming

    other then that few thing are allowed in JS for nameing

    *** Legal Variable Names
        A variable name can contain only letters, numbers, dollar signs, and underscores.
        Camel Case: userName, totalAmount, itemsCount.
        Underscore/Dollar Sign: _private, $element, user_id.
        Numbers: user1, item2 (as long as they don't start with a number).
        Case Sensitivity: myVar and myvar are different.

    **  Illegal Variable Names
        A variable name can't contain any spaces.
        Start with Numbers: 1stUser.
        Spaces: first name.
        Hyphens/Special Characters: user-name, my#variable.
        Reserved Keywords: class, var, function, return.
        Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.

    **  Example
        var userResponse;
        var userResponseTime;
        var userResponseTimeLimit;
        var response;

        var user_name;
        var _username;
        var $username;

        var username1;
        var username2;

#   What is Data Type in js

    JavaScript has eight basic data types, which are divided into two main categories: Primitives (simple, immutable values) and Objects (complex, mutable structures).
    
    1. Primitive Data Types:
    ------------------------
    Primitives represent a single value and do not have properties or methods of their own.

    String: Used for textual data (e.g., "Hello"). JavaScript does not have a separate "character" type.
    Number: Represents both integers and floating-point numbers (e.g., 42, 3.14). It also includes special values like Infinity, -Infinity, and NaN (Not-a-Number).
    BigInt: Used for integers with arbitrary precision that are too large for the standard Number type.
    Boolean: Represents logical entities with only two possible values: true or false.
    Undefined: The value automatically assigned to a variable that has been declared but not yet initialized (e.g., let x;).
    Null: Represents the intentional absence of any object value. It is often used to "empty" a variable.
    Symbol: Introduced in ES6, symbols are unique and immutable identifiers often used as object property keys.

    2. Non-Primitive (Object) Data Type
    -----------------------------------
    The Object type is the only non-primitive type and is used to store collections of data or more complex entities. Many built-in structures are actually specialized objects, including:

    Objects: Standard key-value pairs (e.g., { name: "John", age: 30 }).
    Arrays: Ordered lists of values (e.g., [1, 2, 3]).
    Functions: Executable blocks of code that are technically objects in JavaScript.
    Dates: Used for managing dates and times.

    Checking Data Types
    You can use the typeof operator to find the data type of a variable. Note a common legacy quirk: typeof null returns "object".

    Value typeof Result
    "Hello"         |      "string"
    42              |       "number"
    true            |       "boolean"
    undefined       |       "undefined"
    null            |       "object" (historical bug)
    {}              |       "object"
    []              |       "object"
    function(){}    |       "function"
    new Date()      |       "object"
    new Error()     |       "object"
    new RegExp()    |       "object"
    new Set()       |       "object"
    new Map()       |       "object"

#   How to check data type

    You can use the typeof operator to find the data type of a variable.
    We use typeof();

    Example:
    typeof(5);
    typeof("Fahim")


#   what are JavaScript Arithmetic Operators
    
    Arithmetic Operators are used to perform arithmetic on numbers:


    Operator        |       Description
        +	        |       Addition
        -           |       Subtraction
        *           |       Multiplication
        **          |       Exponentiation
        /           |       Division
        %           |       Modulus (Division Remainder)
        ++          |       Increment
        --          |       Decrement

#   What are JavaScript Assignment Operators

    Assignment operators assign values to JavaScript variables.

    Given that x = 10 and y = 5, the table below explains the assignment operators:

    Operator        Example	        Same As         Result
        =           x = y           x = y           x = 5
        +=          x += y          x = x + y       x = 15
        -=          x -= y          x = x - y       x = 5
        *=          x *= y          x = x * y       x = 50
        **=         x **= y         x = x ** y      x = 100000
        /=          x /= y          x = x / y       x = 2
        %=          x %= y          x = x % y       x = 0
        :           x: 45           size.x = 45     x = 45

#   What are Logical Assignment Operators

    Operator        Example             Result
    &&=	            true &&= 10         x = 10  (Need both condition shoud be true)
    ||=	            false ||= 10	    x = 10  (Only 1 condition should be true)
    ??=             null ??= 10         x = 10

#   What are Comparison Operators

    Comparison operators are used to compare two values.

    Comparison operators always return true or false.

    Given that x = 5, the table below explains the comparison operators:


    Operator        Description                                 Comparing       Returns	
    ==              equal to                                    x == 8          false
                                                                x == 5          true
                                                                x == "5"        true
    ===             equal value and equal type                  x === 5         true
                                                                x === "5"       false
    !=              not equal                                   x != 8          true
    !==             not equal value or not equal type	        x !== 5         false
                                                                x !== "5"       true
                                                                x !== 8         true
    >               greater than                                x > 8           false
    <	            less than                                   x < 8           true
    >=              greater than or equal to                    x >= 8          false
    <=              less than or equal to	                    x <= 8          true


#   What are Conditional Statements

    Conditional Statements allow us to perform different actions for different conditions.

    Conditional statements run different code depending on true or false conditions.

    Conditional statements include:

    if
    if...else
    if...else if...else
    switch
    ternary (? :)

#   When to use Conditionals

    Use if to specify a code block to be executed, if a specified condition is true
    
    Use else to specify a code block to be executed, if the same condition is false
    
    Use else if to specify a new condition to test, if the first condition is false
    
    Use switch to specify many alternative code blocks to be executed
    
    Use (? :) (ternary) as a shorthand for if...else
