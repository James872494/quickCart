import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface ProductItemProps {
  id: string;
  image: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice?: string;
  onAddToCart: () => void;
}

const StarRating = ({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text
        key={i}
        style={[
          styles.star,
          i <= rating ? styles.filledStar : styles.emptyStar,
        ]}
      >
        ★
      </Text>
    );
  }

  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starsContainer}>{stars}</View>
      <Text style={styles.reviewCount}>({reviewCount.toLocaleString()})</Text>
    </View>
  );
};

const ProductItem = ({
  image,
  title,
  rating,
  reviewCount,
  price,
  originalPrice,
  onAddToCart,
}: ProductItemProps) => (
  <View style={styles.productItem}>
    <View style={styles.productImageContainer}>
      <Text style={styles.productImage}>{image}</Text>
    </View>
    <View style={styles.productInfo}>
      <Text style={styles.productTitle}>{title}</Text>
      <StarRating rating={rating} reviewCount={reviewCount} />
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{price}</Text>
        {originalPrice && (
          <Text style={styles.originalPrice}>{originalPrice}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
        <Text style={styles.addToCartIcon}>🛒</Text>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SearchResultsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Filters");

  const router = useRouter();

  const handleBack = () => {
    router.back();
    console.log("Back pressed");
  };

  const handleVoiceSearch = () => {
    console.log("Voice search pressed");
  };

  const handleFilterPress = (filter: string) => {
    setActiveFilter(filter);
    console.log("Filter pressed:", filter);
  };

  const handleSort = () => {
    console.log("Sort pressed");
  };

  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
  };

  const products = [
    {
      id: "1",
      image: "🥬",
      title: "Soft green leaves, rich in iron, used in salads or cooked.",
      rating: 4,
      reviewCount: 1245,
      price: "$9.99",
      originalPrice: "$10.99",
    },
    {
      id: "2",
      image: "🥬",
      title: "Crunchy layered vegetable, eaten raw or cooked in dishes.",
      rating: 5,
      reviewCount: 2891,
      price: "$9.00",
    },
    {
      id: "3",
      image: "🥕",
      title: "Orange root vegetable, sweet when raw, tender when cooked.",
      rating: 4,
      reviewCount: 892,
      price: "$9.00",
      originalPrice: "$10.00",
    },
    {
      id: "4",
      image: "🧄",
      title: "Pungent bulbs, essential base for cooking, many color varieties",
      rating: 4,
      reviewCount: 1567,
      price: "$8.50",
      originalPrice: "$9.00",
    },
  ];

  const filters = ["Filters", "Price", "Category", "Rating"];

  return (
    <View style={styles.AndroidContainer}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backIcon}>
              <MaterialIcons name="arrow-back" size={40} color="#000" />
            </Text>
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search products..."
            />
          </View>
          <TouchableOpacity
            style={styles.voiceButton}
            onPress={handleVoiceSearch}
          >
            <Text style={styles.voiceIcon}>
              <MaterialIcons name="mic" size={30} color="black" />
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filtersScroll}
          >
            {filters.map((filter, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.filterButton,
                  activeFilter === filter && styles.activeFilterButton,
                ]}
                onPress={() => handleFilterPress(filter)}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === filter && styles.activeFilterText,
                  ]}
                >
                  {filter === "Filters" ? "▼ Filters" : filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Results Header */}
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsText}>
            247 results for &#39;{searchQuery}&#39;
          </Text>
          <TouchableOpacity style={styles.sortButton} onPress={handleSort}>
            <Text style={styles.sortIcon}>⚏</Text>
            <Text style={styles.sortText}>Sort</Text>
          </TouchableOpacity>
        </View>

        {/* Product List */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem
              {...item}
              onAddToCart={() => handleAddToCart(item.id)}
            />
          )}
          style={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  AndroidContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  backIcon: {
    fontSize: 20,
    color: "#333",
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  searchInput: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  voiceButton: {
    padding: 8,
    marginLeft: 8,
  },
  voiceIcon: {
    fontSize: 20,
  },
  filtersContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  filtersScroll: {
    paddingHorizontal: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "#F0F0F0",
  },
  activeFilterButton: {
    backgroundColor: "#00C851",
  },
  filterText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  activeFilterText: {
    color: "#FFFFFF",
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  resultsText: {
    fontSize: 14,
    color: "#666",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortIcon: {
    fontSize: 16,
    color: "#666",
    marginRight: 4,
  },
  sortText: {
    fontSize: 14,
    color: "#666",
  },
  productList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  productItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  productImage: {
    fontSize: 32,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  star: {
    fontSize: 14,
  },
  filledStar: {
    color: "#FFD700",
  },
  emptyStar: {
    color: "#E0E0E0",
  },
  reviewCount: {
    fontSize: 12,
    color: "#666",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
  },
  addToCartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00C851",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  addToCartIcon: {
    fontSize: 14,
    color: "#FFFFFF",
    marginRight: 6,
  },
  addToCartText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#333",
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    position: "relative",
  },
  activeNavItem: {
    position: "relative",
  },
  activeIndicator: {
    position: "absolute",
    top: -8,
    width: 40,
    height: 40,
    backgroundColor: "#00C851",
    borderRadius: 20,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: "#999",
  },
  activeNavText: {
    color: "#FFFFFF",
  },
});

export default SearchResultsScreen;
