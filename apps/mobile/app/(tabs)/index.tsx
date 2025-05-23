import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { trpc } from "@/libs/trpc";

export default function HomeScreen() {
	const { data: licences } = trpc.licences.getAll.useQuery();

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					style={styles.reactLogo}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Welcome!</ThemedText>
				<HelloWave />
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Licences</ThemedText>
			</ThemedView>
			{licences?.map((licence) => (
				<ThemedView key={licence.id} style={styles.stepContainer}>
					<ThemedText type="defaultSemiBold">
						Start: {licence.start_date}
					</ThemedText>
					<ThemedText type="defaultSemiBold">
						End: {licence.end_date}
					</ThemedText>
					<ThemedText type="defaultSemiBold">
						Reason: {licence.reason}
					</ThemedText>
				</ThemedView>
			))}
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
