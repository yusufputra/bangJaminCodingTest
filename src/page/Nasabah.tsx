/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {LayoutPage} from '../component/LayoutPage';
import {colors} from '../utils/colors';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {HeaderNavigation} from '../component/HeaderNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {NasabahItem} from '../component/Nasabah/NasabahItem';
import {useGetCustomer} from '../domain/customer/getCustomerHooks';

export const Nasabah = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'nasabah'>) => {
  const customer = useGetCustomer();
  return (
    <LayoutPage
      statusBarStyle={{
        backgroundColor: colors.white,
        barStyle: 'dark-content',
      }}
      style={{backgroundColor: colors.white}}>
      <HeaderNavigation
        title="Nasabah"
        onBackPress={() => navigation.goBack()}
      />
      <View
        style={{
          backgroundColor: colors.white,
          height: '100%',
          padding: 16,
          paddingTop: 0,
        }}>
        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 30}}>
          {customer.isLoading && <ActivityIndicator color={colors.black} />}
        </View>
        <FlatList
          style={{paddingBottom: 50}}
          data={customer.data?.pages.map(item => item.data).flat()}
          renderItem={item => <NasabahItem {...item.item} />}
          onEndReached={() => {
            if (customer.data) {
              if (
                customer.data?.pages[customer.data?.pages.length - 1].page <
                customer.data?.pages[customer.data?.pages.length - 1]
                  .total_pages
              ) {
                customer.fetchNextPage();
              }
            }
          }}
        />
      </View>
    </LayoutPage>
  );
};
