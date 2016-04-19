import {Dispatcher} from 'flux';

let GreetingDispatcher = new Dispatcher();


GreetingDispatcher.register((event)=>{
  let action = event.action;

  switch (action) {
    case 'NEW_USER':
      console.log("Action to create a new user");
      break;

    case 'REMOVE_USER':
      console.log("Action to remove a new user");
      break;
  }
  return true;
});

export default GreetingDispatcher;
