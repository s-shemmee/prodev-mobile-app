import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
		container: {
			height: 400,
			borderRadius: 10,
			overflow: "hidden",
			marginBottom: 16,
		},
		overlay: {
			height: 400,
			backgroundColor: "rgba(0,0,0,0.3)",
			padding: 16,
			justifyContent: "space-between",
		},
		favoriteGroup: {
			alignItems: "flex-end",
		},
		favoriteOverlay: {
			backgroundColor: "rgba(0,0,0,0.4)",
			width: 48,
			height: 48,
			borderRadius: 24,
			alignItems: "center",
			justifyContent: "center",
		},
		rateGroup: {
			flexDirection: "row",
			alignItems: "center",
			columnGap: 5,
		},
		rateText: {
			fontSize: 20,
			color: "#fff",
			fontWeight: "500",
			marginLeft: 4,
		},
		priceGroup: {
			backgroundColor: "#F9F9F9",
			width: 104,
			height: 40,
			borderRadius: 10,
			alignItems: "center",
			justifyContent: "center",
			marginTop: 8,
		},
		priceText: {
			fontSize: 18,
			color: "#34967C",
			fontWeight: "bold",
		},
		cardGroup: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			marginTop: 16,
		},
		cardTextGroup: {
			flex: 1,
		},
		cardLargeText: {
			fontSize: 22,
			color: "#fff",
			fontWeight: "bold",
		},
			cardSmallText: {
				fontSize: 14,
				color: "#fff",
				marginTop: 4,
			},
			group: {
				flexDirection: "column",
				justifyContent: "space-between",
				flex: 1,
			},
});

export { styles };
