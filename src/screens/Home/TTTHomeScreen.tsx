import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useState } from "react";
import {
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import TTTHeadline from "../../components/TTTHeadline";
import TTTPlayernameInput from "../../components/TTTPlayernameInput";

const TTTHomeScreen: FC<NativeStackScreenProps<NavigatorParamList, "home">> = ({
  navigation,
}) => {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <TTTHeadline text={"Tic Tac Toe"} />
        <TTTPlayernameInput
          description={"Please enter the name of the 1st player:"}
          value={player1}
          onChangeText={setPlayer1}
        />
        <View style={{ marginTop: 8 }} />
        <TTTPlayernameInput
          description={"Please enter the name of the 2nd player:"}
          value={player2}
          onChangeText={setPlayer2}
        />
        <Button
          title={"Start Game"}
          onPress={() => navigation.navigate("game", { player1, player2 })}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TTTHomeScreen;
