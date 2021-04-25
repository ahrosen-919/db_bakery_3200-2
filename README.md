# db_bakery_3200
## DB Bakery
### Final Project CS 3200 
### Section 4 Group 1
#### Aidan Rosenberg & Luke Chen - Section 4

### Brief description of the project
For our project, we created a bakery with customers, baked goods, and ingredients. 

### UML Diagram
UML Diagram is located in the same folder as this file, at:
[db_design_pdf](https://github.com/ahrosen-919/db_bakery_3200-2/blob/416b1cda1555cd5b6f3e897b895a72709ef83658/db_design_final_project_UML.pdf.pdf)

#### User Model
Our "user" is the customer of the bakery. A customer has a first name, last name, username, password, and email,
all of which are Strings, as well as a date of birth, which is a Date, and a boolean that denotes whether they are a 
rewards member or not. 

#### Domain Models
Our first domain object is a baked good. A baked good has a name, which is a String, a price, which is a double, calories,
which is an Integer, a type, which is a foreign-key String refering to an enumeration called Type, and two booleans: one that 
denotes whether the baked good is vegan, and one that denotes whether the baked good is gluten free.

Our other domain object is an ingredient. An ingredient has a name and a brand name, both of which are Strings, and a price, 
which is a double.

#### Relationships
##### User to Domain Object
One customer can "buy" or have many baked goods, but a type of baked good can be bought or "had" by many customers, so there 
is a  many to many relationship between baked goods and customers. This relationship has been reified by the association class
called CartItem, which contains 3 fields: customerId, which refers to the id of the customer that has the baked good,
bakedGoodId, which refers to the id of the baked good that the customer has, and an amount, which refers to how many of the
baked good that the user has.

##### Domain Object to Domain Object
One baked good can "be made of" or have many ingredients, but an ingredient can "be in" many baked goods, so there 
is a  many to many relationship between baked goods and ingredients. This relationship has been reified by the association class
called Recipe, which contains 3 fields: bakedGoodId, which refers to the id of the baked good, ingredientId, which refers
to the id of the ingredient in the baked good, and quantity, which refers to how much of the ingredient in the baked good.

#### Enumeration
Our enumeration is the class Type, which contains four possible values: CAKE, COOKIE, PASTRY, and BREAD. The field that
is constrained to the enumeration is the field type in the class BakedGood.

#### Interface Requirements
For the BakedGood, Customer, Ingredient, CartItem, and Recipe classes, the interface allows the user to create, read, update, 
and delete records. If a user attempts to edit a record, but presses "create" instead of "save", the changes will not update. 
If a user attempts to edit the value of customerId or bakedGoodId in the CartItem editor, it will not update. If a user 
attempts to edit the value of ingredientId or bakedGoodId in the Recipe editor, it will not update. A user MUST use preexisting
customerIds or bakedGoodIds when creating a new CartItem, or else the api will crash attempting to get a customer or baked good
using an id that does not exist. A user MUST use preexisting ingredientIds or bakedGoodIds when creating a new Recipe, or else
the api will crash attempting to get an ingredient or baked good using an id that does not exist. To select a type for a 
Baked Good, there is a drop down menu that lists the four options of the Type enumeration.
