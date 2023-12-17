// import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import the screens
import ShoppingLists from './components/ShoppingLists';

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAal9IRzcTGt8hz_9v98S_mWgLPPYm6aPg",
    authDomain: "shoppinglist-c1b39.firebaseapp.com",
    projectId: "shoppinglist-c1b39",
    storageBucket: "shoppinglist-c1b39.appspot.com",
    messagingSenderId: "1050638261671",
    appId: "1:1050638261671:web:a1e9d470dcab70eed8ea82"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ShoppingLists"
      >
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;