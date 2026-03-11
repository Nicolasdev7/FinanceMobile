import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Eye, EyeOff, Facebook, Mail } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === 'teste' && password === 'teste') {
      navigation.replace('Main');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos. Use teste/teste.');
    }
  };

  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={['#3B82F6', '#2563EB']}
        className="h-1/3 justify-center items-center"
      >
        <Text className="text-white text-4xl font-bold">Welcome</Text>
      </LinearGradient>

      <View className="flex-1 -mt-10 bg-white rounded-t-[40px] px-8 pt-10">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-6">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Username Or Email</Text>
            <View className="bg-blue-50/50 flex-row items-center px-4 py-4 rounded-2xl border border-blue-100">
              <TextInput
                className="flex-1 text-gray-800"
                placeholder="example@example.com"
                placeholderTextColor="#94A3B8"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2 ml-1">Password</Text>
            <View className="bg-blue-50/50 flex-row items-center px-4 py-4 rounded-2xl border border-blue-100">
              <TextInput
                className="flex-1 text-gray-800"
                placeholder="••••••••"
                placeholderTextColor="#94A3B8"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} color="#94A3B8" /> : <Eye size={20} color="#94A3B8" />}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="items-end mb-8">
            <Text className="text-gray-500 font-medium">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-500 py-4 rounded-full items-center shadow-lg shadow-blue-500/30 mb-4"
          >
            <Text className="text-white font-bold text-lg">Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            className="bg-blue-50 py-4 rounded-full items-center border border-blue-100 mb-8"
          >
            <Text className="text-blue-600 font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>

          <View className="items-center mb-8">
            <Text className="text-gray-400 font-medium mb-6">or sign up with</Text>
            <View className="flex-row space-x-6 gap-6">
              <TouchableOpacity className="p-3 border border-gray-100 rounded-full">
                <Facebook color="#1877F2" size={24} />
              </TouchableOpacity>
              <TouchableOpacity className="p-3 border border-gray-100 rounded-full">
                <View className="w-6 h-6 items-center justify-center">
                   <Text className="text-red-500 font-bold text-xl">G</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-center mb-10">
            <Text className="text-gray-400">Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="text-blue-500 font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
