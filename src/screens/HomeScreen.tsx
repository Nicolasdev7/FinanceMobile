import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Wallet, Bell, TrendingUp, TrendingDown } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <View
        style={{
          borderBottomLeftRadius: 36,
          borderBottomRightRadius: 36,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.18,
          shadowRadius: 26,
          elevation: 12,
        }}
      >
        <LinearGradient
          colors={['#10B981', '#059669']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ paddingTop: 22, paddingBottom: 96, paddingHorizontal: 24 }}
        >
          <View className="flex-row justify-between items-center mb-8">
            <View>
              <Text className="text-green-50 text-sm font-medium mb-1">Bem-vindo de volta,</Text>
              <Text className="text-white text-2xl font-bold tracking-tight">Nicolas</Text>
            </View>
            <TouchableOpacity className="bg-white/20 p-3 rounded-full border border-white/10">
              <Bell color="white" size={22} />
            </TouchableOpacity>
          </View>
          
          <View className="items-center">
            <Text className="text-green-100 text-sm font-medium mb-2 tracking-wider uppercase">Saldo Total</Text>
            <Text className="text-white text-5xl font-bold tracking-tighter">R$ 12.450,00</Text>
          </View>
        </LinearGradient>
      </View>

      {/* Cards Section - Floating overlap */}
      <View className="px-6 -mt-16 flex-row justify-between mb-6">
        <View 
          className="bg-white w-[48%] p-5 rounded-3xl items-start"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.1,
            shadowRadius: 20,
            elevation: 10,
          }}
        >
          <View className="bg-green-50 p-3 rounded-2xl mb-4">
            <TrendingUp color="#10B981" size={24} />
          </View>
          <Text className="text-gray-400 text-xs font-medium mb-1 uppercase tracking-wide">Entradas</Text>
          <Text className="text-gray-900 text-xl font-bold">R$ 4.250</Text>
        </View>

        <View 
          className="bg-white w-[48%] p-5 rounded-3xl items-start"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.1,
            shadowRadius: 20,
            elevation: 10,
          }}
        >
          <View className="bg-red-50 p-3 rounded-2xl mb-4">
            <TrendingDown color="#EF4444" size={24} />
          </View>
          <Text className="text-gray-400 text-xs font-medium mb-1 uppercase tracking-wide">Saídas</Text>
          <Text className="text-gray-900 text-xl font-bold">R$ 1.250</Text>
        </View>
      </View>

      {/* Recent Transactions */}
      <View className="flex-1 px-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-gray-900 text-lg font-bold">Transações Recentes</Text>
          <TouchableOpacity>
            <Text className="text-green-600 text-sm font-semibold">Ver tudo</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={item} className="bg-white p-4 rounded-2xl mb-3 flex-row items-center justify-between border border-gray-100">
              <View className="flex-row items-center">
                <View className={`p-3 rounded-xl mr-4 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-purple-50'}`}>
                  <Wallet color={index % 2 === 0 ? '#3B82F6' : '#8B5CF6'} size={22} strokeWidth={2.5} />
                </View>
                <View>
                  <Text className="text-gray-900 font-bold text-base">Salário Mensal</Text>
                  <Text className="text-gray-400 text-xs font-medium mt-0.5">Hoje, 10:00</Text>
                </View>
              </View>
              <Text className="text-green-600 font-bold text-base">+ R$ 4.500,00</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
