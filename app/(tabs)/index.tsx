import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Product {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  oldPrice?: number;
  category: string;
  rating: number;
  numOfRaters: number;
  image?: string;
}

interface CategoryItemProps {
  icon: string;
  title: string;
  backgroundColor: string;
  onPress: () => void;
}

interface ProductItemProps {
  image?: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  onAddPress: () => void;
}

// Category Component
const CategoryItem = ({
  icon,
  title,
  backgroundColor,
  onPress,
}: CategoryItemProps) => (
  <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
    <View style={[styles.categoryIcon, { backgroundColor }]}>
      <Text style={styles.categoryIconText}>{icon}</Text>
    </View>
    <Text style={styles.categoryTitle}>{title}</Text>
  </TouchableOpacity>
);

// Product Component
const ProductItem = ({
  image,
  title,
  subtitle,
  price,
  originalPrice,
  onAddPress,
}: ProductItemProps) => (
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

const HomeScreen = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredDeals, setFeaturedDeals] = useState<Product[]>([]);

  const BACKEND_IP = "192.168.1.220:3000"; // replace with your local IP

  const categories = [
    { icon: "🍎", title: "Fruits", backgroundColor: "#FFE4B5" },
    { icon: "🥩", title: "Meat", backgroundColor: "#FFB6C1" },
    { icon: "🥛", title: "Dairy", backgroundColor: "#ADD8E6" },
    { icon: "🍿", title: "Snacks", backgroundColor: "#DDA0DD" },
    { icon: "🥕", title: "Veggies", backgroundColor: "#98FB98" },
    { icon: "🍞", title: "Bakery", backgroundColor: "#F0E68C" },
    { icon: "🥤", title: "Drinks", backgroundColor: "#AFEEEE" },
    { icon: "•••", title: "More", backgroundColor: "#D3D3D3" },
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`http://${BACKEND_IP}/products`);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data: Product[] = await res.json();
      setProducts(data);

      const featured = data.filter((p) => p.oldPrice);
      setFeaturedDeals(featured);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleSearch = () => {
    router.push("/(tabs)/search");
  };

  const handleCategoryPress = (category: string) => {
    console.log("Category pressed:", category);
  };

  const handleAddProduct = (product: string) => {
    console.log("Add product:", product);
  };

  const handleSeeAll = () => {
    console.log("See all deals pressed");
  };

  return (
    <View style={styles.AndroidContainer}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.logo}>
              <Text style={styles.logoIcon}>
                <Image
                  source={require("../../assets/images/QuickCartLogo.png")}
                  style={{ width: 100, height: 40, resizeMode: "contain" }}
                />
              </Text>
            </View>
            <TouchableOpacity style={styles.settingsButton}>
              <Text style={styles.settingsIcon}>⚙️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <MaterialIcons
                name="search"
                size={24}
                color="hsla(218, 11%, 65%, 1)"
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for products..."
                placeholderTextColor="#999"
                onFocus={handleSearch}
              />
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileIcon}>☰</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Categories */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shop by Category</Text>
            <View style={styles.categoriesGrid}>
              {categories.map((c, index) => (
                <CategoryItem
                  key={index}
                  icon={c.icon}
                  title={c.title}
                  backgroundColor={c.backgroundColor}
                  onPress={() => handleCategoryPress(c.title)}
                />
              ))}
            </View>
          </View>

          {/* Featured Deals */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Featured Deals</Text>
              <TouchableOpacity onPress={handleSeeAll}>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
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
          </View>

          {/* All Products */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>All Products</Text>
            {products.map((p) => (
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "hsla(210, 17%, 96%, 1)" },
  AndroidContainer: { flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  header: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 16 },
  headerTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  logo: { width: 80, height: 40, alignItems: "center", justifyContent: "center", marginLeft: 10 },
  logoIcon: { fontSize: 28 },
  settingsButton: { padding: 8 },
  settingsIcon: { fontSize: 20 },
  searchContainer: { flexDirection: "row", alignItems: "center", gap: 12 },
  searchBar: { flex: 1, flexDirection: "row", alignItems: "center", backgroundColor: "#F0F0F0", borderRadius: 25, paddingHorizontal: 16, paddingVertical: 8 },
  searchInput: { flex: 1, fontSize: 16, color: "#333", marginLeft: 8 },
  profileButton: { width: 40, height: 40, backgroundColor: "#00C851", borderRadius: 20, alignItems: "center", justifyContent: "center" },
  profileIcon: { fontSize: 16, color: "#fff" },
  content: { flex: 1 },
  section: { paddingHorizontal: 16, marginBottom: 24 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 16 },
  seeAllText: { fontSize: 16, color: "#00C851", fontWeight: "600" },
  categoriesGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  categoryItem: { width: "22%", alignItems: "center", marginBottom: 20 },
  categoryIcon: { width: 60, height: 60, borderRadius: 16, alignItems: "center", justifyContent: "center", marginBottom: 8 },
  categoryIconText: { fontSize: 24 },
  categoryTitle: { fontSize: 12, color: "#333", textAlign: "center", fontWeight: "500" },
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
  addButton: { backgroundColor: "#00C851", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  addButtonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "600" },
});

export default HomeScreen;
