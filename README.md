## **Prelimary Design **
###Database Design
https://docs.google.com/document/d/1eefCFmm3MZLQLExw0QNlpYnXKzA9bOWg49k15ZDFn2c/edit?usp=sharing

###Controller Layer 
is the first point of call for incoming requests. Controllers are responsible for validating the data received from the user, and rejecting it if it is in an invalid format. Once processing is complete, controllers are also responsible for sending the result back to the user.

###Our Service Layer 
contains all the “business logic” for the application. We generally have one “Service” per business area. This layer receives the validated request from a Controller, does any processing required including requesting or updating data, and returns a result.

###Data Layer 
components generally correspond 1-to-1 with a back-end data source such as a database or API. There is no business logic in this layer.