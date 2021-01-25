import { Button, Page, test, TextField } from 'bigtest';
import { Tabable } from './interactors/tabable'; 

export default test('Interactors with BigTest')
  .step(Page.visit('/'))
  .step(Button('SIGN IN').exists())
  // finding text fields by their label is an important feature
  .step(TextField('First name').exists())
  .step(TextField('Last name').exists())
  // binding the value to the native input is also important
  .step(TextField('First name').fillIn('firstname'))
  // why is this needed????
  .step(TextField('First name').focus())
  // .assertion(
  //   TextField('First name', {focused: true}).exists()
  // )  
  // .assertion(
  //   TextField('First name')
  //   .has({ value: 'firstname' })
  // )
  .step(Tabable('First name').tabToNext())
  .assertion(
    TextField('Last name', {focused: true}).exists()
  )  


  /* 
  Questions
 - Is there another way besides "child" to have multiple tests in one file?
 - Can the element be saved to a variable, and have assertions scoped to it using built-ins?
 - How to get whether the text element has focus? Should natively exist as properties on interactive built-ins?
 Like this:
 ```
 .assertion(
    TextField('Last name').focused()
  )  

- How to run tests on change?
- FillIn does not keep things focused. Why?
- Is it enough to show that something can be focused?
- How would you test tab order?
- Where to teach putting interactors?
- Should ts types be removed from copy-pasteable examples?
- This error is confusing. It should have advice about what you should do, and maybe link to the explanation in the guide
Cannot add step after adding assertion
BigTest tests separate assertions and steps, where assertions should not affect application state and only verify behaviour. Assertions and children are always run after steps, so you cannot add them out of order.
- Can we show something better than placeholder for the write your own interactors guide?
- Should we expose dispatchKey events as public API? Useful for testing tab order
- How to get this tab working?
- the sample app needs a gitignore with the build files and node modules

```
 

Content
- Show how to assert if an element has focus
- Show how using the TextField selector is part of testing for a11y

Bugs
- Unexpected shutdown from creating a new interactor and importing it in a test file.
Fine after reboot.
-ERROR Cannot read property 'length' of undefined if you leave createInteractor empty. Should have better error message
  */
    
