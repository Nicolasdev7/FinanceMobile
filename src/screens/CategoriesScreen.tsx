import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ShoppingBag, Coffee, Car, Home, Film, Dumbbell, Plane, Gift, Plus } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CATEGORIES = [
  { id: '1', name: 'Compras', icon: ShoppingBag, color: '#F97316', bg: 'bg-orange-50', border: 'border-orange-100' },
  { id: '2', name: 'Alimentação', icon: Coffee, color: '#A16207', bg: 'bg-yellow-50', border: 'border-yellow-100' },
  { id: '3', name: 'Transporte', icon: Car, color: '#3B82F6', bg: 'bg-blue-50', border: 'border-blue-100' },
  { id: '4', name: 'Moradia', icon: Home, color: '#6366F1', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { id: '5', name: 'Lazer', icon: Film, color: '#EC4899', bg: 'bg-pink-50', border: 'border-pink-100' },
  { id: '6', name: 'Saúde', icon: Dumbbell, color: '#EF4444', bg: 'bg-red-50', border: 'border-red-100' },
  { id: '7', name: 'Viagem', icon: Plane, color: '#14B8A6', bg: 'bg-teal-50', border: 'border-teal-100' },
  { id: '8', name: 'Presentes', icon: Gift, color: '#8B5CF6', bg: 'bg-purple-50', border: 'border-purple-100' },
];

export default function CategoriesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <View className="px-6 py-6 bg-white border-b border-gray-100 flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-gray-900 tracking-tight">Categorias</Text>
        <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
            <Plus color="#374151" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            className={`bg-white p-6 rounded-3xl mb-4 w-[48%] items-center justify-center border ${item.border}`}
            style={{
                shadowColor: item.color,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                elevation: 2,
            }}
          >
            <View className={`p-5 rounded-2xl mb-4 ${item.bg}`}>
              <item.icon color={item.color} size={32} strokeWidth={2} />
            </View>
            <Text className="text-gray-900 font-bold text-base">{item.name}</Text>
            <Text className="text-gray-400 text-xs mt-1 font-medium">12 transações</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
