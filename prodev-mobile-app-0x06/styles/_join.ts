import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20
	},
	iconsection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 22
	},
	titleTextGroup: {
		marginTop: 20
	},
	titleText: {
		fontWeight: 700,
		fontSize: 39,
	},
	subText: {
		fontWeight: 400,
		fontSize: 12,
		color: '#7E7B7B'
	},
	formGroup: {
		marginTop: 44,
		rowGap: 10
	},
	formLabel: {
		fontSize: 18,
		fontWeight: 400,
		color: '#7B7B7B',
		marginBottom: 7
	},
	formControl: {
		borderWidth: 2,
		height: 50,
		borderRadius: 10,
		borderColor: '#E9E9E9',
	},
	// ...more styles...
});

export default styles;
