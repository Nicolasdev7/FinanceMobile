import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronLeft, Bell, Calendar, ChevronDown } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddExpenseScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#F1F9F6]" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <LinearGradient
          colors={['#3B82F6', '#2563EB']}
          className="px-6 pt-4 pb-16 rounded-b-[40px]"
        >
          <View className="flex-row justify-between items-center mb-8">
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <ChevronLeft color="white" size={24} />
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">Add Expenses</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Bell color="white" size={22} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Form Container */}
        <View className="px-6 -mt-8">
          <View className="bg-white rounded-[32px] p-8 shadow-sm">
             
             {/* Date Field */}
             <View className="mb-6">
                <Text className="text-gray-900 font-bold text-sm mb-3">Date</Text>
                <TouchableOpacity className="bg-[#F1F9F6] px-4 py-4 rounded-2xl flex-row justify-between items-center">
                   <Text className="text-gray-500 font-medium">April 30, 2024</Text>
                   <Calendar color="#3B82F6" size={20} />
                </TouchableOpacity>
             </View>

             {/* Category Field */}
             <View className="mb-6">
                <Text className="text-gray-900 font-bold text-sm mb-3">Category</Text>
                <TouchableOpacity className="bg-[#F1F9F6] px-4 py-4 rounded-2xl flex-row justify-between items-center">
                   <Text className="text-gray-400 font-medium">Select the category</Text>
                   <ChevronDown color="#3B82F6" size={20} />
                </TouchableOpacity>
             </View>

             {/* Amount Field */}
             <View className="mb-6">
                <Text className="text-gray-900 font-bold text-sm mb-3">Amount</Text>
                <View className="bg-[#F1F9F6] px-4 py-4 rounded-2xl">
                   <TextInput 
                     placeholder="$26,00" 
                     className="text-gray-800 font-medium"
                     placeholderTextColor="#94A3B8"
                     keyboardType="numeric"
                   />
                </View>
             </View>

             {/* Expense Title Field */}
             <View className="mb-6">
                <Text className="text-gray-900 font-bold text-sm mb-3">Expense Title</Text>
                <View className="bg-[#F1F9F6] px-4 py-4 rounded-2xl">
                   <TextInput 
                     placeholder="Dinner" 
                     className="text-gray-800 font-medium"
                     placeholderTextColor="#94A3B8"
                   />
                </View>
             </View>

             {/* Message Field */}
             <View className="mb-8">
                <View className="bg-[#F1F9F6] px-4 py-4 rounded-3xl h-32">
                   <TextInput 
                     placeholder="Enter Message" 
                     className="text-gray-800 font-medium"
                     placeholderTextColor="#3B82F6"
                     multiline
                     textAlignVertical="top"
                   />
                </View>
             </View>

             <TouchableOpacity 
               onPress={() => navigation.goBack()}
               className="bg-[#00D094] py-4 rounded-full items-center shadow-lg shadow-emerald-500/20"
             >
               <Text className="text-white font-bold text-lg">Save</Text>
             </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
