import React from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import { Search, Filter, ShoppingCart, Coffee, Car, ArrowUpRight, ArrowDownRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TRANSACTIONS_DATA = [
  {
    title: 'Hoje',
    data: [
      { id: '1', title: 'Supermercado', time: '12:30', amount: '- R$ 450,00', type: 'expense', icon: ShoppingCart, color: 'bg-orange-50', iconColor: '#F97316' },
    ]
  },
  {
    title: 'Ontem',
    data: [
      { id: '2', title: 'Uber', time: '18:20', amount: '- R$ 24,90', type: 'expense', icon: Car, color: 'bg-blue-50', iconColor: '#3B82F6' },
      { id: '3', title: 'Café da Manhã', time: '08:15', amount: '- R$ 15,50', type: 'expense', icon: Coffee, color: 'bg-amber-50', iconColor: '#D97706' },
    ]
  },
  {
    title: '07 de Março',
    data: [
      { id: '4', title: 'Freelance', time: '14:00', amount: '+ R$ 850,00', type: 'income', icon: ArrowUpRight, color: 'bg-blue-50', iconColor: '#3B82F6' },
    ]
  }
];

export default function TransactionsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <View className="px-6 py-5 flex-row justify-between items-center bg-white border-b border-gray-100 shadow-sm z-10">
        <Text className="text-2xl font-bold text-gray-900 tracking-tight">Extrato</Text>
        <View className="flex-row space-x-3 gap-3">
            <TouchableOpacity className="bg-gray-100 p-2.5 rounded-xl">
                <Search color="#374151" size={22} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-900 p-2.5 rounded-xl">
                <Filter color="white" size={22} />
            </TouchableOpacity>
        </View>
      </View>

      <SectionList
        sections={TRANSACTIONS_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-4 mt-2 ml-1">{title}</Text>
        )}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-2xl mb-3 flex-row items-center justify-between border border-gray-100 shadow-sm">
            <View className="flex-row items-center">
              <View className={`p-3.5 rounded-2xl mr-4 ${item.color}`}>
                <item.icon color={item.iconColor} size={22} strokeWidth={2.5} />
              </View>
              <View>
                <Text className="text-gray-900 font-bold text-base">{item.title}</Text>
                <Text className="text-gray-400 text-xs font-medium mt-0.5">{item.time}</Text>
              </View>
            </View>
            <Text className={`font-bold text-base ${item.type === 'income' ? 'text-blue-600' : 'text-red-500'}`}>
              {item.amount}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
