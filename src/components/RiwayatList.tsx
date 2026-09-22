// components/RiwayatList.tsx
import { StyleSheet, Text, View } from "react-native";

interface RiwayatListProps {
  daftarKota: string[];
}

export default function RiwayatList({ daftarKota }: RiwayatListProps) {
  return (
    <View style={styles.tabel}>
      {/* Header tabel */}
      <View style={[styles.baris, styles.headerBaris]}>
        <Text style={[styles.selNo, styles.headerTeks]}>No</Text>
        <Text style={[styles.selKota, styles.headerTeks]}>Kota</Text>
      </View>

      {/* Isi tabel */}
      {daftarKota.length === 0 ? (
        <View style={styles.baris}>
          <Text style={styles.kosong}>Belum ada riwayat pencarian</Text>
        </View>
      ) : (
        daftarKota.map((kota, index) => (
          <View
            key={kota}
            style={[
              styles.baris,
              index % 2 === 1 && styles.barisGanjil, // selang-seling warna
            ]}
          >
            <Text style={styles.selNo}>{index + 1}</Text>
            <Text style={styles.selKota}>{kota}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabel: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    overflow: "hidden",
  },
  baris: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  headerBaris: {
    backgroundColor: "#F3F4F6",
  },
  barisGanjil: {
    backgroundColor: "#FAFAFA",
  },
  headerTeks: {
    fontWeight: "bold",
    color: "#374151",
  },
  selNo: {
    width: 40,
  },
  selKota: {
    flex: 1,
  },
  kosong: {
    color: "#9CA3AF",
    fontStyle: "italic",
  },
});