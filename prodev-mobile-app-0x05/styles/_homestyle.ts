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
	filterContainer: {
		alignItems: 'center',
		marginHorizontal: 8,
	},
	listingContainer: {
		marginTop: 16,
	},
	paginationContainer: {
		alignItems: 'center',
		marginVertical: 16,
	},
	showMoreButton: {
		backgroundColor: '#34967C',
		borderRadius: 8,
		padding: 12,
	},
	showMoreButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export { styles };
