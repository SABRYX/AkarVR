import {
    Intro,
    MainVr
} from '../screens/Index';
import { createStackNavigator } from "react-navigation";



const MainStack = createStackNavigator({
    Intro: { screen: Intro },
    MainVr: { screen: MainVr }
},
	{
		initialRouteName: 'Intro',
		headerMode:'screen'
	}
);


export { MainStack };