import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";

interface OrderItem {
  id: string;
  image: string;
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  time: string;
  status: string;
  statusColor: string;
  items: OrderItem[];
  additionalItems: number;
  totalAmount: number;
  address: string;
  isOngoing: boolean;
}

interface OrderCardProps {
  order: Order;
  onTrackOrder: (orderNumber: string) => void;
}

const OrderCard = ({ order, onTrackOrder }: OrderCardProps) => (
  <View style={styles.orderCard}>
    <View style={styles.orderHeader}>
      <View>
        <Text style={styles.orderNumber}>Order {order.orderNumber}</Text>
        <Text style={styles.orderDateTime}>
          {order.date} • {order.time}
        </Text>
      </View>
      <View
        style={[styles.statusBadge, { backgroundColor: order.statusColor }]}
      >
        <Text style={styles.statusText}>{order.status}</Text>
      </View>
    </View>

    <View style={styles.orderItems}>
      {order.items.map((item, index) => (
        <View key={index} style={styles.itemImage}>
          <Text style={styles.itemEmoji}>{item.image}</Text>
        </View>
      ))}
      {order.additionalItems > 0 && (
        <View style={styles.additionalItems}>
          <Text style={styles.additionalItemsText}>
            +{order.additionalItems}
          </Text>
        </View>
      )}
    </View>

    <View style={styles.orderFooter}>
      <View style={styles.orderDetails}>
        <Text style={styles.totalLabel}>Total Amount</Text>
        <Text style={styles.totalAmount}>${order.totalAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.addressIcon}>📍</Text>
        <Text style={styles.addressText}>{order.address}</Text>
      </View>
    </View>

    <TouchableOpacity
      style={styles.trackButton}
      onPress={() => onTrackOrder(order.orderNumber)}
    >
      <Text style={styles.trackButtonText}>Track Order</Text>
    </TouchableOpacity>
  </View>
);

const MyOrdersScreen = () => {
  const [activeTab, setActiveTab] = useState<"ongoing" | "past">("ongoing");

  const handleTrackOrder = (orderNumber: string) => {
    console.log("Track order:", orderNumber);
  };

  const orders: Order[] = [
    {
      id: "1",
      orderNumber: "#QC12345",
      date: "Dec 15, 2024",
      time: "2:30 PM",
      status: "Preparing",
      statusColor: "#FFA500",
      items: [
        { id: "1", image: "🍎" },
        { id: "2", image: "🥛" },
        { id: "3", image: "🍞" },
      ],
      additionalItems: 3,
      totalAmount: 34.5,
      address: "123 Oak Street, Apt 4B, Downtown",
      isOngoing: true,
    },
    {
      id: "2",
      orderNumber: "#QC12344",
      date: "Dec 15, 2024",
      time: "11:15 AM",
      status: "Out for Delivery",
      statusColor: "#007AFF",
      items: [
        { id: "1", image: "🥕" },
        { id: "2", image: "🥩" },
      ],
      additionalItems: 2,
      totalAmount: 28.75,
      address: "456 Pine Avenue, Unit 2A, Midtown",
      isOngoing: true,
    },
    {
      id: "3",
      orderNumber: "#QC12343",
      date: "Dec 14, 2024",
      time: "6:45 PM",
      status: "Delivered",
      statusColor: "#00C851",
      items: [
        { id: "1", image: "🍌" },
        { id: "2", image: "🥬" },
        { id: "3", image: "🧀" },
      ],
      additionalItems: 1,
      totalAmount: 22.3,
      address: "789 Maple Drive, Suite 1, Uptown",
      isOngoing: false,
    },
  ];

  const filteredOrders = orders.filter((order) =>
    activeTab === "ongoing" ? order.isOngoing : !order.isOngoing
  );

  return (
    <View style={styles.AndroidContainer}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Orders</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "ongoing" && styles.activeTab]}
            onPress={() => setActiveTab("ongoing")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "ongoing" && styles.activeTabText,
              ]}
            >
              Ongoing Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "past" && styles.activeTab]}
            onPress={() => setActiveTab("past")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "past" && styles.activeTabText,
              ]}
            >
              Past Orders
            </Text>
          </TouchableOpacity>
        </View>

        {/* Orders List */}
        <FlatList
          data={filteredOrders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OrderCard order={item} onTrackOrder={handleTrackOrder} />
          )}
          style={styles.ordersList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.ordersListContent}
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
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems:"center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#00C851",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#00C851",
    fontWeight: "600",
  },
  ordersList: {
    flex: 1,
  },
  ordersListContent: {
    padding: 16,
  },
  orderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  orderDateTime: {
    fontSize: 14,
    color: "#666",
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  orderItems: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  itemImage: {
    width: 40,
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  itemEmoji: {
    fontSize: 20,
  },
  additionalItems: {
    width: 40,
    height: 40,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  additionalItemsText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
  orderFooter: {
    marginBottom: 16,
  },
  orderDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 14,
    color: "#666",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressIcon: {
    fontSize: 14,
    marginRight: 8,
    color: "#666",
  },
  addressText: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  trackButton: {
    backgroundColor: "#00C851",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  trackButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
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

export default MyOrdersScreen;
