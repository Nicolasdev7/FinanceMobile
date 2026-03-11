import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { ChevronLeft, Bell, Utensils, Bus, Pill, ShoppingBag, Key, Gift, PiggyBank, Ticket, Plus, TrendingUp, TrendingDown } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const CATEGORIES = [
  { id: '1', name: 'Food', icon: Utensils, color: '#3B82F6' },
  { id: '2', name: 'Transport', icon: Bus, color: '#60A5FA' },
  { id: '3', name: 'Medicine', icon: Pill, color: '#93C5FD' },
  { id: '4', name: 'Groceries', icon: ShoppingBag, color: '#BFDBFE' },
  { id: '5', name: 'Rent', icon: Key, color: '#60A5FA' },
  { id: '6', name: 'Gifts', icon: Gift, color: '#93C5FD' },
  { id: '7', name: 'Savings', icon: PiggyBank, color: '#BFDBFE' },
  { id: '8', name: 'Entertainment', icon: Ticket, color: '#60A5FA' },
];

export default function CategoriesScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F1F9F6]" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header Section (Same as Home) */}
        <LinearGradient
          colors={['#3B82F6', '#2563EB']}
          className="px-6 pt-4 pb-16 rounded-b-[40px]"
        >
          <View className="flex-row justify-between items-center mb-8">
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <ChevronLeft color="white" size={24} />
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">Categorias</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Bell color="white" size={22} />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between items-end mb-6">
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <TrendingUp color="#BFDBFE" size={14} className="mr-1" />
                <Text className="text-blue-100 text-xs font-medium">Saldo Total</Text>
              </View>
              <Text className="text-white text-2xl font-bold">R$7,783.00</Text>
            </View>
            <View className="h-8 w-[1px] bg-white/20 mx-4" />
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <TrendingDown color="#BFDBFE" size={14} className="mr-1" />
                <Text className="text-blue-100 text-xs font-medium">Total Gastos</Text>
              </View>
              <Text className="text-blue-100 text-2xl font-bold">-R$1,187.40</Text>
            </View>
          </View>

          <View className="bg-white/20 h-5 rounded-full px-1 justify-center mb-2">
            <View className="bg-white h-3 rounded-full w-[30%]" />
          </View>
          <Text className="text-blue-100 text-[10px] font-medium">30% das suas despesas, parece bom.</Text>
        </LinearGradient>

        {/* Categories Grid */}
        <View className="flex-row flex-wrap justify-between px-8 -mt-8">
          {CATEGORIES.map((cat) => (
            <TouchableOpacity 
              key={cat.id} 
              onPress={() => navigation.navigate('CategoryDetail', { category: cat.name })}
              className="w-[30%] items-center mb-6"
            >
              <View 
                style={{ backgroundColor: '#DBEAFE' }}
                className="w-full aspect-square rounded-[24px] items-center justify-center shadow-sm border border-white/50"
              >
                <cat.icon color={cat.color} size={32} strokeWidth={2.5} />
              </View>
              <Text className="text-gray-900 font-bold text-[12px] mt-2">{cat.name}</Text>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity 
            onPress={() => setModalVisible(true)}
            className="w-[30%] items-center mb-6"
          >
            <View 
              style={{ backgroundColor: '#DBEAFE' }}
              className="w-full aspect-square rounded-[24px] items-center justify-center shadow-sm border border-white/50"
            >
              <Plus color="#3B82F6" size={32} strokeWidth={2.5} />
            </View>
            <Text className="text-gray-900 font-bold text-[12px] mt-2">Mais</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* New Category Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/40 justify-center items-center px-10">
          <View className="bg-white w-full rounded-[32px] p-8 items-center shadow-2xl">
            <Text className="text-gray-900 font-bold text-xl mb-6">Nova Categoria</Text>
            
            <View className="bg-[#F1F9F6] w-full px-4 py-4 rounded-2xl mb-6">
               <TextInput 
                 placeholder="Write..." 
                 className="text-gray-800"
                 placeholderTextColor="#94A3B8"
               />
            </View>

            <TouchableOpacity 
              onPress={() => setModalVisible(false)}
              className="bg-[#00D094] w-full py-4 rounded-full items-center mb-3 shadow-lg shadow-emerald-500/20"
            >
              <Text className="text-white font-bold text-lg">Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => setModalVisible(false)}
              className="bg-gray-100 w-full py-4 rounded-full items-center"
            >
              <Text className="text-gray-500 font-bold text-lg">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
