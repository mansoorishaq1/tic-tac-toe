import { StyleSheet, Text, View } from "react-native";
import { GameState } from "../types/GameState";

const getDescriptionForGameState = (
  gameState: GameState,
  player1: string,
  player2: string
) => {
  switch (gameState) {
    case GameState.ACTION_PLAYER1:
      return `${player1}, it's your turn`;
    case GameState.ACTION_PLAYER2:
      return `${player2}, it's your turn`;
    case GameState.DRAW:
      return "Game over! Draw!";
    case GameState.WON_PLAYER1:
      return `${player1}, you won`;
    case GameState.WON_PLAYER2:
      return `${player2}, you won`;
    default:
      return "";
  }
};

const TTTGameDescription = (props: {
  player1: string;
  player2: string;
  gameState: GameState;
}) => {
  const { player1, player2, gameState } = props;
  const description: string = getDescriptionForGameState(
    gameState,
    player1,
    player2
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default TTTGameDescription;
