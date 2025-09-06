import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImageContainer: {
		flex: 1,
		height: height,
	},
	logoContainer: {
		padding: 40,
		alignItems: "center",
		marginTop: 74,
	},
	titleContainer: {
		marginTop: 40,
	},
	titleText: {
		fontWeight: "bold",
		fontSize: 32,
		color: "#34967C",
		textAlign: "center",
	},
	titleSubTextContainer: {
		marginTop: 10,
		marginBottom: 20,
	},
	titleSubText: {
		fontSize: 16,
		color: "#7E7B7B",
		textAlign: "center",
	},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 30,
		columnGap: 20,
	},
	buttonPrimary: {
		backgroundColor: "#34967C",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 10,
	},
	buttonPrimaryText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 18,
	},
	buttonSecondary: {
		backgroundColor: "#fff",
		borderWidth: 2,
		borderColor: "#34967C",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 10,
	},
	buttonSecondaryText: {
		color: "#34967C",
		fontWeight: "bold",
		fontSize: 18,
	},
});

export default styles;
