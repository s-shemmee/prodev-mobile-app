import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
	},
	iconsection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 22,
	},
	titleTextGroup: {
		marginTop: 20,
	},
	titleText: {
		fontWeight: '700',
		fontSize: 39,
		color: '#34967C',
	},
	subText: {
		fontWeight: '400',
		fontSize: 12,
		color: '#7E7B7B',
	},
	formGroup: {
		marginTop: 44,
		rowGap: 10,
	},
	formLabel: {
		fontSize: 18,
		fontWeight: '400',
		color: '#7B7B7B',
		marginBottom: 7,
	},
	formControl: {
		borderWidth: 2,
		height: 50,
		borderRadius: 10,
		borderColor: '#E9E9E9',
		paddingHorizontal: 10,
		fontSize: 16,
		color: '#333',
		backgroundColor: '#fff',
	},
	formPasswordControl: {
		borderWidth: 2,
		height: 50,
		borderRadius: 10,
		borderColor: '#E9E9E9',
		paddingHorizontal: 10,
		fontSize: 16,
		color: '#333',
		backgroundColor: '#fff',
	},
	primaryButton: {
		backgroundColor: '#34967C',
		paddingVertical: 12,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default styles;
