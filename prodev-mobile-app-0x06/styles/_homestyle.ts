import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 16,
	},
	searchGroup: {
		marginBottom: 16,
	},
	searchFormGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	searchControlGroup: {
		flex: 1,
	},
	searchFormText: {
		fontSize: 16,
		color: '#333',
	},
	searchControl: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: 8,
		marginTop: 4,
	},
	searchButton: {
		backgroundColor: '#34967C',
		borderRadius: 8,
		padding: 8,
		marginLeft: 8,
	},
		filterGroup: {
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 8,
		},
		filterButton: {
			backgroundColor: '#fff',
			borderRadius: 20,
			paddingVertical: 8,
			paddingHorizontal: 16,
			marginRight: 8,
			borderWidth: 1,
			borderColor: '#34967C',
		},
		filterText: {
			color: '#34967C',
			fontWeight: 'bold',
			fontSize: 14,
		}
});

export default styles;
// ...existing code...
