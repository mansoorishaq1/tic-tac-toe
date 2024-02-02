import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, View } from "react-native";
import { NavigatorParamList } from "../../TTTNavigationContainer";
import TTTGameDescription from "../../components/TTTGameDescription";
import TTTGameField from "../../components/TTTGameField";
import TTTHeadline from "../../components/TTTHeadline";
import GameContext from "../../contexts/GameContext";
import useGame from "../../hooks/useGame";
import { isGameGameFinished } from "../../services/GameService";

const TTTGameScreen: FC<NativeStackScreenProps<NavigatorParamList, "game">> = ({
  route,
}) => {
  const { player1, player2 } = route.params;
  const { currentGameState, gameField, playerAction, startNewGame } = useGame(
    player1,
    player2
  );
  return (
    <View>
      <GameContext.Provider value={{ currentPlayerAction: playerAction }}>
        <TTTHeadline text={`${player1} vs. ${player2}`} />
        <TTTGameField gameField={gameField} />
        <TTTGameDescription
          player1={player1}
          player2={player2}
          gameState={currentGameState}
        />
        {isGameGameFinished(currentGameState) && (
          <Button title={"Play again"} onPress={startNewGame} />
        )}
      </GameContext.Provider>
    </View>
  );
};

export default TTTGameScreen;
