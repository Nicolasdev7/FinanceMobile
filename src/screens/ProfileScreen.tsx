import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { User, Settings, CreditCard, Bell, Shield, LogOut, ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <View
        style={{
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.14,
          shadowRadius: 24,
          elevation: 10,
        }}
      >
        <LinearGradient
          colors={['#10B981', '#059669']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 24 }}
        >
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-white text-2xl font-bold tracking-tight">Perfil</Text>
            <TouchableOpacity className="bg-white/15 p-3 rounded-2xl border border-white/10">
              <Settings color="white" size={20} />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center">
            <View className="w-16 h-16 rounded-2xl bg-white/15 border border-white/10 items-center justify-center">
              <User color="white" size={30} strokeWidth={2.5} />
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-white text-xl font-bold">Nicolas</Text>
              <Text className="text-green-50/90 text-sm font-medium mt-1">nicolas@email.com</Text>
            </View>
            <View className="bg-white/15 p-3 rounded-2xl border border-white/10">
              <ChevronRight color="white" size={20} />
            </View>
          </View>
        </LinearGradient>
      </View>

      <ScrollView className="flex-1 px-6 -mt-6" contentContainerStyle={{ paddingBottom: 120 }}>
        <View
          className="bg-white rounded-3xl p-5 mb-5 border border-gray-100"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 0.08,
            shadowRadius: 18,
            elevation: 6,
          }}
        >
          <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Geral</Text>

          <TouchableOpacity className="py-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-gray-100 p-2.5 rounded-2xl mr-4">
                <User color="#111827" size={20} />
              </View>
              <Text className="text-gray-900 font-bold">Minha Conta</Text>
            </View>
            <ChevronRight color="#CBD5E1" size={20} />
          </TouchableOpacity>

          <View className="h-px bg-gray-100 my-2" />

          <TouchableOpacity className="py-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-gray-100 p-2.5 rounded-2xl mr-4">
                <CreditCard color="#111827" size={20} />
              </View>
              <Text className="text-gray-900 font-bold">Cartões</Text>
            </View>
            <ChevronRight color="#CBD5E1" size={20} />
          </TouchableOpacity>

          <View className="h-px bg-gray-100 my-2" />

          <TouchableOpacity className="py-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-gray-100 p-2.5 rounded-2xl mr-4">
                <Bell color="#111827" size={20} />
              </View>
              <Text className="text-gray-900 font-bold">Notificações</Text>
            </View>
            <ChevronRight color="#CBD5E1" size={20} />
          </TouchableOpacity>
        </View>

        <View
          className="bg-white rounded-3xl p-5 mb-5 border border-gray-100"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 0.08,
            shadowRadius: 18,
            elevation: 6,
          }}
        >
          <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Segurança</Text>

          <TouchableOpacity className="py-3 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="bg-gray-100 p-2.5 rounded-2xl mr-4">
                <Shield color="#111827" size={20} />
              </View>
              <Text className="text-gray-900 font-bold">Privacidade</Text>
            </View>
            <ChevronRight color="#CBD5E1" size={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-red-50 border border-red-100 rounded-3xl p-5 flex-row items-center justify-center">
          <LogOut color="#EF4444" size={20} />
          <Text className="text-red-600 font-bold ml-2">Sair da Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
