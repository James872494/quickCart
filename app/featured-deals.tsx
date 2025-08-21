import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

interface Product {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  oldPrice?: number;
  image?: string;
}

// Product Component (same as in HomeScreen)
const ProductItem = ({
  image,
  title,
  subtitle,
  price,
  originalPrice,
  onAddPress,
}: {
  image?: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  onAddPress: () => void;
}) => (
  <View style={styles.productItem}>
    <View style={styles.productImageContainer}>
      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.productImage}
          resizeMode="cover"
        />
      ) : (
        <Text style={styles.productImagePlaceholder}>📦</Text>
      )}
    </View>
    <View style={styles.productInfo}>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productSubtitle}>{subtitle}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{price}</Text>
        {originalPrice && (
          <Text style={styles.originalPrice}>{originalPrice}</Text>
        )}
      </View>
    </View>
    <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
      <Text style={styles.addButtonText}>+ Add</Text>
    </TouchableOpacity>
  </View>
);

const BACKEND_IP = "192.168.1.220:3000";

const FeaturedDealsScreen = () => {
  const [featuredDeals, setFeaturedDeals] = useState<Product[]>([]);

  useEffect(() => {
    fetchFeaturedDeals();
  }, []);

  const fetchFeaturedDeals = async () => {
    try {
      const res = await fetch(`http://${BACKEND_IP}/products`);
      const data: Product[] = await res.json();
      const featured = data.filter((p) => p.oldPrice);
      setFeaturedDeals(featured);
    } catch (err) {
      console.error("Error fetching featured deals:", err);
    }
  };

  const handleAddProduct = (product: string) => {
    console.log("Add product:", product);
  };

  return (
    <View style={styles.AndroidContainer}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.headerTitle}>All Featured Deals</Text>
          {featuredDeals.map((p) => (
            <ProductItem
              key={p._id}
              title={p.name}
              subtitle={`Qty: ${p.quantity}`}
              price={`$${p.price.toFixed(2)}`}
              originalPrice={p.oldPrice ? `$${p.oldPrice.toFixed(2)}` : undefined}
              image={p.image}
              onAddPress={() => handleAddProduct(p.name)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  AndroidContainer: { flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  content: { paddingHorizontal: 16 },
  headerTitle: { fontSize: 24, fontWeight: "bold", marginVertical: 16, color: "#333" },

  // Product styles
  productItem: { flexDirection: "row", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 12, marginBottom: 12, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  productImageContainer: { width: 60, height: 60, backgroundColor: "#F0F0F0", borderRadius: 8, alignItems: "center", justifyContent: "center", marginRight: 12 },
  productImage: { width: 60, height: 60, borderRadius: 8 },
  productImagePlaceholder: { fontSize: 24 },
  productInfo: { flex: 1 },
  productTitle: { fontSize: 16, fontWeight: "600", color: "#333", marginBottom: 4 },
  productSubtitle: { fontSize: 14, color: "#666", marginBottom: 4 },
  priceContainer: { flexDirection: "row", alignItems: "center" },
  productPrice: { fontSize: 16, fontWeight: "bold", color: "#333", marginRight: 8 },
  originalPrice: { fontSize: 14, color: "#999", textDecorationLine: "line-through" },
  addButton: { ba
