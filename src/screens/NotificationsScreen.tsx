import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, Bell, Target, RefreshCw, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Reminder!',
    description: 'Set up your automatic savings to meet your savings goal.',
    time: '17:00 - April 24',
    icon: Bell,
    iconBg: 'bg-emerald-500',
    iconColor: 'white',
    section: 'Today'
  },
  {
    id: '2',
    title: 'New Update',
    description: 'Set up your automatic savings to meet your savings goal.',
    time: '17:00 - April 24',
    icon: RefreshCw,
    iconBg: 'bg-emerald-500',
    iconColor: 'white',
    section: 'Today'
  },
  {
    id: '3',
    title: 'Transactions',
    description: 'A new transaction has been registered\nGroceries | Pantry | -$100.00',
    time: '17:00 - April 24',
    icon: TrendingUp,
    iconBg: 'bg-emerald-500',
    iconColor: 'white',
    section: 'Yesterday'
  },
  {
    id: '4',
    title: 'Reminder!',
    description: 'Set up your automatic savings to meet your savings goal.',
    time: '17:30 - April 24',
    icon: Bell,
    iconBg: 'bg-emerald-500',
    iconColor: 'white',
    section: 'Yesterday'
  },
  {
    id: '5',
    title: 'Expense Record',
    description: 'We recommend that you be more attentive to your finances.',
    time: '17:30 - April 24',
    icon: ArrowDownRight,
    iconBg: 'bg-emerald-500',
    iconColor: 'white',
    section: 'This Weekend'
  }
];

export default function NotificationsScreen({ navigation }: any) {
  const sections = ['Today', 'Yesterday', 'This Weekend'];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <LinearGradient
        colors={['#3B82F6', '#2563EB']}
        className="px-6 pt-4 pb-8 rounded-b-[40px]"
      >
        <View className="flex-row justify-between items-center">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="bg-white/20 p-2.5 rounded-full border border-white/10"
          >
            <ChevronLeft color="white" size={24} />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Notification</Text>
          <TouchableOpacity className="bg-white/20 p-2.5 rounded-full border border-white/10">
            <Bell color="white" size={22} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24 }}>
        {sections.map((section) => (
          <View key={section} className="mb-6">
            <Text className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-4">{section}</Text>
            {NOTIFICATIONS.filter(n => n.section === section).map((item) => (
              <View key={item.id} className="flex-row mb-6">
                <View className={`${item.iconBg} p-3 rounded-2xl mr-4 h-12 w-12 items-center justify-center`}>
                  <item.icon color={item.iconColor} size={20} />
                </View>
                <View className="flex-1 border-b border-gray-100 pb-4">
                  <View className="flex-row justify-between items-start mb-1">
                    <Text className="text-gray-900 font-bold text-base">{item.title}</Text>
                    <Text className="text-blue-400 text-[10px] font-medium">{item.time}</Text>
                  </View>
                  <Text className="text-gray-500 text-xs leading-5">{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
