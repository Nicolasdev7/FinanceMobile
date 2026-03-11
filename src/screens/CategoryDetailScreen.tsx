import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, Bell, Utensils, Calendar, TrendingUp, TrendingDown } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function CategoryDetailScreen({ route, navigation }: any) {
  const { category } = route.params || { category: 'Food' };

  const EXPENSES = [
    { id: '1', title: 'Dinner', time: '18:27 - April 30', amount: '-$26.00', month: 'April' },
    { id: '2', title: 'Delivery Pizza', time: '15:00 - April 24', amount: '-$18.35', month: 'April' },
    { id: '3', title: 'Lunch', time: '12:30 - April 15', amount: '-$15.40', month: 'April' },
    { id: '4', title: 'Brunch', time: '9:30 - April 08', amount: '-$12.13', month: 'April' },
    { id: '5', title: 'Dinner', time: '20:50 - March 31', amount: '-$27.20', month: 'March' },
  ];

  const months = ['April', 'March'];

  return (
    <SafeAreaView className="flex-1 bg-[#F1F9F6]" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header (Same as Categories) */}
        <LinearGradient
          colors={['#3B82F6', '#2563EB']}
          className="px-6 pt-4 pb-16 rounded-b-[40px]"
        >
          <View className="flex-row justify-between items-center mb-8">
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <ChevronLeft color="white" size={24} />
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">{category}</Text>
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
                <Text className="text-blue-100 text-xs font-medium">Total de Gastos</Text>
              </View>
              <Text className="text-blue-100 text-2xl font-bold">-R$1,187.40</Text>
            </View>
          </View>

          <View className="bg-white/20 h-5 rounded-full px-1 justify-center mb-2">
            <View className="bg-white h-3 rounded-full w-[30%]" />
          </View>
          <Text className="text-blue-100 text-[10px] font-medium">30% das suas despesas, parece bom.</Text>
        </LinearGradient>

        {/* Expenses List */}
        <View className="px-6 -mt-8">
          <View className="bg-white rounded-[32px] p-6 shadow-sm">
             {months.map((month) => (
               <View key={month} className="mb-6">
                 <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-gray-900 font-bold text-base">{month}</Text>
                    <Calendar color="#3B82F6" size={20} />
                 </View>
                 
                 {EXPENSES.filter(e => e.month === month).map((item) => (
                   <View key={item.id} className="flex-row items-center mb-6">
                      <View className="bg-blue-100 p-3 rounded-2xl mr-4">
                         <Utensils color="#3B82F6" size={20} />
                      </View>
                      <View className="flex-1">
                         <Text className="text-gray-900 font-bold text-sm">{item.title}</Text>
                         <Text className="text-gray-400 text-[10px] font-medium mt-1">{item.time}</Text>
                      </View>
                      <Text className="text-blue-600 font-bold text-sm">{item.amount}</Text>
                   </View>
                 ))}
               </View>
             ))}

             <TouchableOpacity 
               onPress={() => navigation.navigate('AddExpense')}
               className="bg-[#00D094] py-4 rounded-full items-center shadow-lg shadow-emerald-500/20 mt-2"
             >
               <Text className="text-white font-bold text-lg">Adicionar Gastos</Text>
             </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
