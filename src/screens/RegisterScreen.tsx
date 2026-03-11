import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={['#3B82F6', '#2563EB']}
        className="h-[200px] justify-center items-center"
      >
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="absolute left-6 top-12 p-2 bg-white/20 rounded-xl"
        >
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-bold">Criar Conta</Text>
      </LinearGradient>

      <View className="flex-1 -mt-10 bg-white rounded-t-[40px] px-8 pt-10">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Nome Completo</Text>
            <View className="bg-blue-50/50 px-4 py-4 rounded-2xl border border-blue-100">
              <TextInput
                className="text-gray-800"
                placeholder="example@example.com"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Email</Text>
            <View className="bg-blue-50/50 px-4 py-4 rounded-2xl border border-blue-100 ring-2 ring-blue-400">
              <TextInput
                className="text-gray-800"
                placeholder="example@example.com"
                placeholderTextColor="#94A3B8"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Numero de Telefone</Text>
            <View className="bg-blue-50/50 px-4 py-4 rounded-2xl border border-blue-100">
              <TextInput
                className="text-gray-800"
                placeholder="+ 123 456 789"
                placeholderTextColor="#94A3B8"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Data de Nascimento</Text>
            <View className="bg-blue-50/50 px-4 py-4 rounded-2xl border border-blue-100">
              <TextInput
                className="text-gray-800"
                placeholder="DD / MM / YYYY"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Senha</Text>
            <View className="bg-blue-50/50 flex-row items-center px-4 py-4 rounded-2xl border border-blue-100">
              <TextInput
                className="flex-1 text-gray-800"
                placeholder="••••••••"
                placeholderTextColor="#94A3B8"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} color="#94A3B8" /> : <Eye size={20} color="#94A3B8" />}
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Confirmar Senha</Text>
            <View className="bg-blue-50/50 flex-row items-center px-4 py-4 rounded-2xl border border-blue-100">
              <TextInput
                className="flex-1 text-gray-800"
                placeholder="••••••••"
                placeholderTextColor="#94A3B8"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeOff size={20} color="#94A3B8" /> : <Eye size={20} color="#94A3B8" />}
              </TouchableOpacity>
            </View>
          </View>

          <View className="items-center mb-8">
            <Text className="text-gray-400 text-xs text-center leading-5">
              By continuing, you agree to{'\n'}
              <Text className="text-gray-900 font-bold">Termos de Uso</Text> and <Text className="text-gray-900 font-bold">Política de Privacidade.</Text>
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert('Sucesso', 'Conta criada com sucesso!')}
            className="bg-blue-500 py-4 rounded-full items-center shadow-lg shadow-blue-500/30 mb-8"
          >
            <Text className="text-white font-bold text-lg">Cadastrar</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mb-10">
            <Text className="text-gray-400">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-blue-500 font-bold">Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
