import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen component={Home} name="home" />
        </Navigator>
    );
};
