import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Bell, Eye, EyeOff, TrendingUp, TrendingDown, Wallet, Car, Utensils, Key, ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#F1F9F6]" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header Section */}
        <LinearGradient
          colors={['#3B82F6', '#2563EB']}
          className="px-6 pt-4 pb-20 rounded-b-[40px]"
        >
          <View className="flex-row justify-between items-center mb-8">
            <View>
              <Text className="text-white text-xl font-bold">Hi, Welcome Back</Text>
              <Text className="text-blue-100 text-xs mt-0.5">Good Morning</Text>
            </View>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Notifications')}
              className="bg-white/20 p-2.5 rounded-full border border-white/10"
            >
              <Bell color="white" size={22} />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between items-end mb-8">
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <TrendingUp color="#BFDBFE" size={14} className="mr-1" />
                <Text className="text-blue-100 text-xs font-medium">Total Balance</Text>
                <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)} className="ml-2">
                  {isBalanceVisible ? <Eye size={16} color="#BFDBFE" /> : <EyeOff size={16} color="#BFDBFE" />}
                </TouchableOpacity>
              </View>
              <Text className="text-white text-3xl font-bold">
                {isBalanceVisible ? '$7,783.00' : '••••••'}
              </Text>
            </View>
            <View className="h-10 w-[1px] bg-white/20 mx-4" />
            <View className="flex-1">
              <View className="flex-row items-center mb-1">
                <TrendingDown color="#BFDBFE" size={14} className="mr-1" />
                <Text className="text-blue-100 text-xs font-medium">Total Expense</Text>
              </View>
              <Text className="text-blue-100 text-3xl font-bold">
                {isBalanceVisible ? '-$1,187.40' : '••••••'}
              </Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View className="bg-white/20 h-6 rounded-full px-1 justify-center mb-3">
            <View className="bg-white h-4 rounded-full w-[30%] items-center justify-center">
              <Text className="text-[10px] font-bold text-blue-600">30%</Text>
            </View>
            <Text className="absolute right-4 text-white text-[10px] font-bold">$20,000.00</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-white/20 p-0.5 rounded mr-2">
               <Text className="text-white text-[8px]">✓</Text>
            </View>
            <Text className="text-blue-100 text-[10px] font-medium">30% Of Your Expenses, Looks Good.</Text>
          </View>
        </LinearGradient>

        {/* Goals Section Overlay */}
        <View className="px-6 -mt-12">
          <View className="bg-[#00D094] rounded-[32px] p-6 flex-row items-center shadow-lg shadow-emerald-500/20">
            <View className="w-24 h-24 items-center justify-center relative">
               {/* Simplified circular progress */}
               <View className="w-20 h-20 rounded-full border-4 border-white/20 items-center justify-center">
                  <View className="absolute w-20 h-20 rounded-full border-4 border-white border-t-transparent border-r-transparent -rotate-45" />
                  <Car color="white" size={30} />
               </View>
               <Text className="text-white text-[10px] font-bold mt-2 text-center">Savings{"\n"}On Goals</Text>
            </View>
            <View className="w-[1px] h-16 bg-white/20 mx-6" />
            <View className="flex-1">
               <View className="mb-4">
                  <Text className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">Revenue Last Week</Text>
                  <Text className="text-white text-xl font-bold">$4,000.00</Text>
               </View>
               <View className="h-[1px] bg-white/20 w-full mb-4" />
               <View>
                  <Text className="text-white/70 text-[10px] font-bold uppercase tracking-wider mb-1">Food Last Week</Text>
                  <Text className="text-blue-600 text-xl font-bold">-$100.00</Text>
               </View>
            </View>
          </View>
        </View>

        {/* Tabs Filter */}
        <View className="flex-row justify-between px-6 mt-8 mb-6">
           {['Daily', 'Weekly', 'Monthly'].map((tab) => (
             <TouchableOpacity 
               key={tab}
               className={`px-8 py-3 rounded-2xl ${tab === 'Monthly' ? 'bg-[#00D094]' : 'bg-transparent'}`}
             >
               <Text className={`font-bold text-sm ${tab === 'Monthly' ? 'text-white' : 'text-gray-400'}`}>{tab}</Text>
             </TouchableOpacity>
           ))}
        </View>

        {/* Transactions List */}
        <View className="px-6">
           {[
             { title: 'Salary', time: '18:27 - April 30', category: 'Monthly', amount: '$4,000.00', icon: Wallet, color: '#3B82F6', bg: '#DBEAFE' },
             { title: 'Groceries', time: '17:00 - April 24', category: 'Pantry', amount: '-$100.00', icon: Utensils, color: '#3B82F6', bg: '#DBEAFE' },
             { title: 'Rent', time: '8:30 - April 15', category: 'Rent', amount: '-$674.40', icon: Key, color: '#3B82F6', bg: '#DBEAFE' },
           ].map((item, index) => (
             <View key={index} className="bg-white rounded-[24px] p-4 mb-4 flex-row items-center border border-gray-50 shadow-sm">
                <View style={{ backgroundColor: item.bg }} className="p-4 rounded-2xl mr-4">
                   <item.icon color={item.color} size={24} strokeWidth={2.5} />
                </View>
                <View className="flex-1">
                   <Text className="text-gray-900 font-bold text-base">{item.title}</Text>
                   <Text className="text-gray-400 text-[10px] font-medium mt-1">{item.time}</Text>
                </View>
                <View className="w-[1px] h-8 bg-gray-100 mx-4" />
                <View className="items-center mr-4">
                   <Text className="text-gray-400 text-[10px] font-bold">{item.category}</Text>
                </View>
                <View className="w-[1px] h-8 bg-gray-100 mx-4" />
                <Text className={`font-bold text-sm ${item.amount.startsWith('-') ? 'text-blue-600' : 'text-gray-900'}`}>
                   {item.amount}
                </Text>
             </View>
           ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
