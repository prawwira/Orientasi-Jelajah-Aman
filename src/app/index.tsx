// app/index.tsx
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import IndikatorAQI from "../../components/IndikatorAQI";
import RiwayatList from "../../components/RiwayatList";
import SearchBox from "../../components/SearchBox";
import WeatherCard from "../../components/WeatherCard";

export default function HalamanUtama() {
  const [kotaAktif, setKotaAktif] = useState("Pekalongan");
  const [riwayat, setRiwayat] = useState<string[]>(["Pekalongan"]);

  useEffect(() => {
    console.log("Kota aktif berubah menjadi:", kotaAktif);
  }, [kotaAktif]);

  function handleCari(kota: string) {
    setKotaAktif(kota);
    if (!riwayat.includes(kota)) {
      setRiwayat([...riwayat, kota]);
    }
  }

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <SearchBox onCari={handleCari} />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cuaca</Text>
      <WeatherCard kota={kotaAktif} suhu={29} tingkatAQI="BAIK" />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Laporan Kualitas Udara
      </Text>
      <IndikatorAQI
        kota={kotaAktif}
        indeksAQI={42}
        tingkat="BAIK"
        diperbaruiPada="2026-09-15 10:00"
      />

      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Riwayat Pencarian
      </Text>
      <RiwayatList daftarKota={riwayat} />
    </View>
  );
}
