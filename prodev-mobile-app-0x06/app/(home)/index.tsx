import PropertyListing from "../../components/PropertyListing";
import styles from "../../styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "../../constants/data";

const Home = () => {
	return (
		<View style={styles.container}>
			<View style={styles.searchGroup}>
				<View style={styles.searchFormGroup}>
					<View style={styles.searchControlGroup}>
						<Text style={styles.searchFormText}>Where to?</Text>
						<TextInput
							style={{ ...styles.searchControl, ...styles.searchFormText }}
							placeholder="Location . Date . Add guest"
						/>
					</View>
					<View style={styles.searchButton}>
						<Feather name="search" size={24} color="white" />
					</View>
				</View>
			</View>

			<View
				style={{
					height: 72,
					backgroundColor: "white",
				}}
			>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.filterGroup}>
						{FILTERS.map((filter, index) => (
							<TouchableHighlight
								key={index}
								style={styles.filterButton}
								underlayColor="#34967C"
							>
								<Text style={styles.filterText}>{filter}</Text>
							</TouchableHighlight>
						))}
					</View>
				</ScrollView>
			</View>

			<PropertyListing listings={SAMPLE_DATA} />
		</View>
	);
};

export default Home;
